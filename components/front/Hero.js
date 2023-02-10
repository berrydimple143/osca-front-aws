import React from 'react';
import AuthButton from '../AuthButton';
import { Space } from 'antd';
import { useRouter } from 'next/router';

const Hero = ({ heading1, heading2, heading3, buttontext1, buttontext2, page, bgImage, textWidth }) => {
    const router = useRouter();

    const gotoRegister = () => {
        router.push('registration');
    }
    const gotoLogin = () => {
        router.push('login');
    }
    return (
        <div className={`flex flex-wrap items-center ${bgImage}`}>

                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" />

                <div className={`${textWidth} sm:w-95 md:w-95 px-20 z-[5]`}>
                    <h1 className='text-white text-7xl font-bold uppercase mt-[10rem]'>{ heading1 }</h1>
                </div>
                { page === "index" && (
                    <div className="flex flex-wrap w-full px-20 z-[5]">
                            <AuthButton
                                clickEvent={gotoLogin}
                                icon='arrow_down'
                                text={`${buttontext1}`}
                                classType='px-10 py-5 mr-5 border rounded-none btn-main bg-active uppercase text-xl'
                                animation='animate-bounce'
                            />
                            <AuthButton
                            clickEvent={gotoRegister}
                            icon='arrow_down'
                            text={`${buttontext2}`}
                            classType='px-10 py-5 border rounded-none btn-main uppercase text-xl text-white'
                            animation='animate-bounce'
                        />
                    </div>
                )}
        </div>
    )
}

export default Hero;
