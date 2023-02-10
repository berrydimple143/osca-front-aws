import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import { DownloadOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const UsefulLinks = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(function(){
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <SiteLayout title="Office of the Senior Citizen's Affairs - Useful Links" setLoading={setLoading}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <Hero
                page="links"
                bgImage="h-screen bg-fixed bg-center bg-cover policy-img"
                heading1="USEFUL LINKS"
                textWidth="w-180"
            />
            <div className="flex flex-wrap justify-center items-left p-10">
                <table className="w-full text-center">
                    <tbody>
                        <tr className="border text-fourth text-xl font-bold">
                            <td className="border p-3 whitespace-nowrap">
                                WEBSITE
                            </td>
                            <td className="border p-3 whitespace-nowrap">
                                Hyperlink
                            </td>
                        </tr>
                        <tr className="border text-md font-bold text-black">
                            <td className="border p-3 whitespace-nowrap">
                                HOUSE OF REPRESENTATIVES
                            </td>
                            <td className="border p-3 whitespace-nowrap">
                            <Tooltip title="GO TO THE WEBSITE" placement="top">
                                <a href='https://www.congress.gov.ph/' target='_blank' rel="noreferrer" className='no-underline text-fourth'>House of Representatives</a>
                            </Tooltip>
                            </td>
                        </tr>
                        <tr className="border text-md font-bold text-black">
                            <td className="border p-3 whitespace-nowrap">
                                DEPARTMENT OF SOCIAL AND WELFARE DEVELOPMENT
                            </td>
                            <td className="border p-3 whitespace-nowrap">
                            <Tooltip title="GO TO THE WEBSITE" placement="top">
                                <a href='https://www.dswd.gov.ph/' target='_blank' rel="noreferrer" className='no-underline text-fourth'>Department of Social and Welfare Development</a>
                            </Tooltip>
                            </td>
                        </tr>
                        <tr className="border text-md font-bold text-black">
                            <td className="border p-3 whitespace-nowrap">
                                DEPARTMENT OF THE INTERIOR AND LOCAL GOVERNMENT
                            </td>
                            <td className="border p-3 whitespace-nowrap">
                            <Tooltip title="GO TO THE WEBSITE" placement="top">
                                <a href='https://www.dilg.gov.ph/' target='_blank' rel="noreferrer" className='no-underline text-fourth'>Department of the Interior and Local Government</a>
                            </Tooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SiteLayout>
    );
}

export default UsefulLinks;
