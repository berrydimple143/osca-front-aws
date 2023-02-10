import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { message } from 'antd';
import AuthLayout from '../components/layouts/AuthLayout';
import AuthForm from '../components/forms/AuthForm';
import { login } from '../services/authService';

export default function Login()
{
    const [loading, setLoading] = useState(false);
    const [inputStatus, setInputStatus] = useState("warning");
    const router = useRouter();

    const onFinish = async (values) =>
    {
        setLoading(true);
        try
        {
            const { login_status, user_id, user_first_name, user_status, token, role } = await login(values);
            setLoading(false);
            if(user_status == 0 || user_status == '0') {
                router.push("/deactivated");
            } else {
                if(login_status == "success") {
                    Cookies.set('loggedIn', true);
                    Cookies.set('token', token);
                    Cookies.set('user_id', user_id);
                    Cookies.set('user_first_name', user_first_name);
                    Cookies.set('user_role', role);
                    message.success("Login successful.");
                    router.push("/admin");
                } else {
                    setInputStatus("error");
                    message.error("Invalid email/password.");
                }
            }
        } catch (error)
        {
            setLoading(false);
            message.error("Something went wrong.");
        }
    }
    useEffect(() => {
        if(Cookies.get('loggedIn')) {
            router.push("/admin");
        }
    }, []);
    return (
        <AuthLayout title="Office of the Senior Citizen's Affairs - Login Page">
            <div className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover main-img">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
                <div className="px-20 text-7xl text-white font-normal z-[2] mt-[1rem] form-width">
                    <div className="bg-white w-full p-5 rounded-none">
                        <AuthForm
                            onFinish={onFinish}
                            inputStatus={inputStatus}
                            loading={loading}
                            title={'Sign in to your account'}
                            page={'Login'}
                        />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
