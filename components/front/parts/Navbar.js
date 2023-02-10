import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dropdown, Menu, Button, Space } from "antd";
import {
  AuditOutlined,
  LineChartOutlined,
  FunctionOutlined,
  TeamOutlined,
  DownloadOutlined,
  MenuOutlined,
  CloseOutlined,
  SolutionOutlined,
  CaretDownOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const handleNav = () => {
        setNav(!nav);
    };
    const handleRoute = (page) => {
        setNav(!nav);
        router.push(page);
    };
    const aboutSubMenu = (
        <Menu
          items={[
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/republic-act");
                }}><Space><AuditOutlined />Republic Act 7432 & 9994</Space></li>
              ),
            },
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/functions");
                }}><Space><FunctionOutlined />Functions</Space></li>
              ),
            },
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/privileges-benefits");
                }}><Space><TeamOutlined />Privileges & Benefits</Space></li>
              ),
            },
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/downloads");
                }}><Space><DownloadOutlined />Downloads</Space></li>
              ),
            },
          ]}
        />
    );
    const cornerSubMenu = (
        <Menu
          items={[
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/data-analytics");
                }}><Space><LineChartOutlined />Data & Analytics</Space></li>
              ),
            },
            {
              label: (
                <li className="font-bold text-sm text-primary" onClick={()=>{
                  router.push("/news-events");
                }}><Space><SolutionOutlined />News & Events</Space></li>
              ),
            },
          ]}
        />
    );
    return (
        <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300 navbar-color drop-shadow">
            <div className="max-w-[1366px] m-auto flex justify-around items-center p-1">
                <Link href="/">
                    <Image
                        src='/images/logo.png'
                        alt='/'
                        width='151'
                        height='74'
                        priority={true}
                        object-fit='cover'
                    />
                </Link>
                <ul className="font-bold text-lg hidden sm:flex">
                    <li className="p-4-custom"><Link href="/">Home</Link></li>
                    <li className="p-4-custom">
                        <a>
                            <Dropdown overlay={aboutSubMenu}>
                                <Button className="hidden sm:flex menu-button" type="link">
                                  About OSCA
                                </Button>
                            </Dropdown>
                        </a>
                    </li>
                    <li className="p-4-custom">
                        <a>
                            <Dropdown overlay={cornerSubMenu}>
                                <Button className="hidden sm:flex menu-button" type="link">
                                  Senior Citizen's Corner
                                </Button>
                            </Dropdown>
                        </a>
                    </li>
                    <li className="p-4-custom"><Link href="/contact">Contact Us</Link></li>
                </ul>
                <div onClick={handleNav} className="border border-white text-primary p-1 block sm:hidden border-black z-10 mr-1">
                    { nav ? <CloseOutlined className='cursor-pointer' style={{ fontSize: '20px' }} /> : <MenuOutlined className='cursor-pointer' style={{ fontSize: '20px'}} /> }
                </div>
                <div className={ nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-100 text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-100 text-center ease-in duration-300"}>
                    <ul>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/')} className="cursor-pointer">Home</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/republic-act')} className="cursor-pointer">Republic Act 7432 & 9994</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/functions')} className="cursor-pointer">Functions</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/privileges-benefits')} className="cursor-pointer">Privileges & Benefits</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/downloads')} className="cursor-pointer">Downloads</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/data-analytics')} className="cursor-pointer">Data & Analytics</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/news-events')} className="cursor-pointer">News & Events</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/contact')} className="cursor-pointer">Contact Us</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/registration')} className="cursor-pointer">Register</a></li>
                        <li className="p-3 text-xl"><a onClick={() => handleRoute('/login')} className="cursor-pointer">Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
