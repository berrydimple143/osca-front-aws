import React, { useState } from 'react';
import Link from 'next/link';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import NavMenu from './NavMenu';

const Headbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-gray-500">
            <div className="max-w-[1366px] m-auto flex justify-between items-center text-white">
                <Link href="/">
                    <h1 className="font-bold text-3xl text-white">Capture</h1>
                </Link>
            </div>
        </div>
    )
}

export default Headbar;
