import React, { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Space } from 'antd';
import { FlagFilled, FacebookFilled, PhoneFilled, MailFilled } from '@ant-design/icons';
import { searchURL } from '../../../services/searchService';

const Footer = ({ setLoading }) => {
    const router = useRouter();
    const searchRef = useRef();

    const searchPage = async () =>
    {
        setLoading(true);
        const urls = [
            'privileges-benefits',
            'republic-act-7432',
            'republic-act-9994',
            'republic-act',
            'functions',
            'news-events',
            'privacy-policy',
            'useful-links',
            ''
        ];
        const baseUrl = process.env.NEXT_PUBLIC_URL;
        urls.map((url) => {
            fetch(`${baseUrl}/${url}`).then(function (response) {
                return response.text();
            }).then(function (html) {
                const str = html.toString();
                if(str.search(searchRef.current.value) !== -1) {
                    router.push(`${baseUrl}/${url}`);
                } else {
                    console.log('not found');
                }
                setLoading(false);
            }).catch(function (err) {
                console.warn('Something went wrong.', err);
                setLoading(false);
            });
        });
    }

    return (
        <div className="bottom-0 left-0 w-full">
            <div className="max-h-[500px] m-auto flex justify-around items-start p-16 bg-fourth text-tertiary">
                <div className="mr-10">
                    <Image
                        src='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/logos/edit_logo-removebg-preview-e1653023867453-300x151.png'
                        alt='/'
                        width='300'
                        height='151'
                        object-fit='cover'
                    />
                </div>
                <div className="mr-10">
                    <ul>
                        <li>
                            <Space>
                                <p><FlagFilled /></p>
                                <p>Provincial Government of Bulacan Guinhawa, Malolos City, Bulacan</p>
                            </Space>
                        </li>
                        <li>
                            <Space>
                                <p><FacebookFilled /></p>
                                <p>OSCA Office</p>
                            </Space>
                        </li>
                        <li>
                            <Space>
                                <p><PhoneFilled /></p>
                                <p>(123) 123-4567</p>
                            </Space>
                        </li>
                        <li>
                            <Space>
                                <p><MailFilled /></p>
                                <p>osca.support@altustechit.com</p>
                            </Space>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col footer-link">
                    <input ref={searchRef} type="text" className="w-44 sm:w-44 md:w-60 lg:w-60 xl:w-60 2xl:w-60 p-3" placeholder="Search here ..." />
                    <button onClick={searchPage} className="w-44 sm:w-44 md:w-60 lg:w-60 xl:w-60 2xl:w-60 mt-2 px-5 py-2 bg-secondary font-bold text-white">SEARCH</button>
                    <ul className="pt-4">
                        <li><Link href="/" className="text-tertiary">Home</Link></li>
                        <li><Link href="/republic-act" className="text-tertiary">About OSCA</Link></li>
                        <li><Link href="/republic-act" className="text-tertiary">Senior Citizens' Corner</Link></li>
                        <li><Link href="/contact" className="text-tertiary">Contact Us</Link></li>
                        <li><Link href="/downloads" className="text-tertiary">Downloads</Link></li>
                        <li><Link href="/useful-links" className="text-tertiary">Useful Links</Link></li>
                        <li><Link href="/privacy-policy" className="text-tertiary">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="h-16 m-auto p-3 flex justify-around items-center bg-fifth text-tertiary border border-t-1 border-b-0 border-l-0 border-r-0 border-amber-300 border-dotted text-sm">
                <h2 className="leading-none text-tertiary">Copyright © 2022 OFFICE OF THE SENIOR CITIZENS' AFFAIRS. All Rights Reserved.</h2>
                <h2 className="leading-none text-tertiary">Powered by: <Link className="text-tertiary" href="https://altustechit.com/" target="_blank">AltusTech IT Solutions Corp.</Link></h2>
            </div>
        </div>
    )
}

export default Footer;
