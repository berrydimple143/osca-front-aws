import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';

export default function RepublicAct() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Republic Act" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="RA"
            bgImage="h-screen bg-fixed bg-right bg-cover ra-img"
            heading1="REPUBLIC ACT 7432 & 9994"
            textWidth="w-200"
        />
        <Corner page="ra" />
    </SiteLayout>
  )
}
