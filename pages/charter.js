import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';

export default function Charter() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - CITIZEN'S CHARTER" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <div className="flex flex-wrap justify-center mt-20">
            <img src="https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/logos/bulacan_logo.png" className="max-w-full h-auto" alt="..." />
            <div className="flex flex-col justify-center items-center p-10">
              <h1 className="text-4xl font-bold">CITIZEN'S CHARTER</h1>
              <p className="text-lg">
                The office is responsible for the welfare of the senior citizens in the City of Imus through the implementation of developmental programs and provision of privileges to its members.
              </p>
            </div>
        </div>
    </SiteLayout>
  )
}
