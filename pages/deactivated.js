import React, { useState } from "react";
import { useRouter } from 'next/router';
import AuthLayout from '../components/layouts/AuthLayout';
import Cookies from 'js-cookie';
import ModalLoading from '../components/ModalLoading';

export default function Deactivated()
{
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const gotoLogin = () =>
    {
        setLoading(true);
        setTimeout(function() {
            router.push("/");
            setLoading(false);
        }, 1000);
    }

    return (
        <AuthLayout title="Office of the Senior Citizen's Affairs - Login Page">
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <div className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover main-img">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
                <div className="px-20 text-7xl text-white font-normal z-[2] mt-[1rem] form-width">
                    <div className="bg-white w-full p-5 rounded-none">

                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Your account was disabled by the administrator.
                          </p>
                        </div>

                        <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            onClick={gotoLogin}
                            className="bg-green-500 text-white font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            {`<<`} Please go back to the homepage.
                          </button>
                        </div>

                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
