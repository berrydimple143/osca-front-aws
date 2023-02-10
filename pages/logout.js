import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import ModalLoading from '../components/ModalLoading';

export default function Logout()
{
    const router = useRouter();
    useEffect(() => {
        Cookies.remove('user_id');
        Cookies.remove('user_first_name');
        Cookies.remove('loggedIn');
        Cookies.remove('token');
        Cookies.remove('user_role');
        router.push("/login");
    }, []);
    return (
        <div>
            <ModalLoading
                  message="Logging out, please wait ..."
                  pcolor="bg-yellow-500"
            />
        </div>
    );
}
