import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import { DownloadOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export default function Downloads() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Downloads" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="downloads"
            bgImage="h-screen bg-fixed bg-center bg-cover downloads-img"
            heading1="DOWNLOADS"
            textWidth="w-180"
        />
        <div className="flex flex-wrap justify-center items-center px-36 py-10">
            <table className="w-full text-center">
                <tbody>
                    <tr className="border text-fourth text-xl font-bold">
                        <td className="border p-3 whitespace-nowrap">
                            FILE NAME
                        </td>
                        <td className="border p-3 whitespace-nowrap">
                            Downloads
                        </td>
                    </tr>
                    <tr className="border text-md font-bold text-black">
                        <td className="border p-3 whitespace-nowrap">
                            CITIZEN’S CHARTER 2021
                        </td>
                        <td className="border p-3 whitespace-nowrap">
                        <Tooltip title="CLICK TO VIEW" placement="top">
                            <a href='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/files/Citizens_Charter_2021_Handbook.pdf' target='_blank' rel="noreferrer" className='no-underline text-red-700'><DownloadOutlined className='border border-red-700 p-2' /></a>
                        </Tooltip>
                        </td>
                    </tr>
                    <tr className="border text-md font-bold text-black">
                        <td className="border p-3 whitespace-nowrap">
                            MEMORANDUM CIRCULAR NO. 2005-63
                        </td>
                        <td className="border p-3 whitespace-nowrap">
                        <Tooltip title="CLICK TO VIEW" placement="top">
                            <a href='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/files/MC2005-063.pdf' target='_blank' rel="noreferrer" className='no-underline text-red-700'><DownloadOutlined className='border border-red-700 p-2' /></a>
                        </Tooltip>
                        </td>
                    </tr>
                    <tr className="border text-md font-bold text-black">
                        <td className="border p-3 whitespace-nowrap">
                            CITIZEN’S CHARTER 2022
                        </td>
                        <td className="border p-3 whitespace-nowrap">
                        <Tooltip title="CLICK TO VIEW" placement="top">
                            <a href='https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/files/DSWD-CITIZENS-CHARTER-2022-6TH-EDITION-V.2-2022.pdf' target='_blank' rel="noreferrer" className='no-underline text-red-700'><DownloadOutlined className='border border-red-700 p-2' /></a>
                        </Tooltip>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </SiteLayout>
  )
}
