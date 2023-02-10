import React from 'react';
import AuthButton from '../AuthButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Charter = () =>
{
    const router = useRouter();

    const gotoCharter = () =>
    {
        router.push('/charter');
    }
    const gotoFAQ = () =>
    {
        router.push('/faq');
    }
    const gotoTracking = () =>
    {
        router.push('/tracking-of-requests');
    }
    return (
        <div className="flex flex-wrap justify-center items-center py-10">
            <AuthButton
                clickEvent={gotoCharter}
                icon='arrow_down'
                text="Citizen's Charter"
                classType='px-8 py-3 mr-5 border rounded-none btn-main bg-active uppercase text-xl'
                animation='animate-bounce'
            />
            <AuthButton
                clickEvent={gotoTracking}
                icon='arrow_down'
                text="Online Tracking of Requests"
                classType='px-8 py-3 mr-5 border rounded-none btn-main navbar-color text-xl'
                animation='animate-bounce'
            />
            <AuthButton
                clickEvent={gotoFAQ}
                icon='arrow_down'
                text="FAQs"
                classType='px-8 py-3 mr-5 border rounded-none btn-main bg-active uppercase text-xl'
                animation='animate-bounce'
            />
        </div>
    );
}

export default Charter;
