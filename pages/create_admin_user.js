import React, { useState } from "react";
import { useRouter } from 'next/router';
import { message } from 'antd';
import AuthLayout from '../components/layouts/AuthLayout';
import AuthForm from '../components/forms/AuthForm';
import { registerAdmin } from '../services/authService';

export default function Register()
{
    const [saving, setSaving] = useState(false);
    const [inputStatus, setInputStatus] = useState("warning");
    const router = useRouter();

    const onFinish = async (values) =>
    {
        setSaving(true);
        try
        {
            const { admin_status } = await registerAdmin(values);
            setSaving(false);
            if(admin_status == "success") {
                message.success("Admin registration successful.");
                router.push("/login");
            } else {
                setInputStatus("error");
                message.success("Registration failed.");
            }
        } catch (error)
        {
            setSaving(false);
            message.error("Something went wrong.");
        }
    }
    return (
        <AuthLayout title="Office of the Senior Citizen's Affairs - Register Page">
            <div className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover main-img">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
                <div className="px-20 text-7xl text-white font-normal z-[2] mt-[1rem] form-width">
                    <div className="bg-white w-full px-5 py-1 rounded-none">
                        <AuthForm
                            onFinish={onFinish}
                            inputStatus={inputStatus}
                            saving={saving}
                            title={'Please fill-up the form completely'}
                            page={'Register'}
                        />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
