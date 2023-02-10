import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import { Divider } from 'antd';

export default function Functions() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Functions" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="functions"
            bgImage="h-screen bg-fixed bg-left bg-cover functions-img"
            heading1="FUNCTIONS"
            textWidth="w-180"
        />
        <div className="flex flex-wrap justify-center items-left py-10">
            <h1 className="px-7 text-lg font-bold">Republic Act No. 9994, otherwise known as “An act to maximize the contribution of Senior Citizens to nation building, grant benefits and special privileges and for other purposes”, states that the following functions of the OSCA Office, to wit:</h1>
            <ul className="px-10 text-lg">
                <li>“(a) To plan, implement and monitor yearly work programs in pursuance of the objectives of this Act;</li>
                <li><Divider /></li>
                <li>“(b) To draw up a list of available and required services which can be provided by the senior citizens;</li>
                <li><Divider /></li>
                <li>“(c) To maintain and regularly update on a quarterly basis the list of senior citizens and to issue national individual identification cards, free of charge, which shall be valid anywhere in the country;</li>
                <li><Divider /></li>
                <li>“(d) To serve as a general information and liason center for senior citizens;</li>
                <li><Divider /></li>
                <li>“(e) To monitor compliance of the provisions of this Act particularly the grant of special discounts and privileges to senior citizens;</li>
                <li><Divider /></li>
                <li>“(f) To report to the mayor, any individual, establishments, business entity, institutions or agency found violating any provision of this Act; and</li>
                <li><Divider /></li>
                <li>“(g) To assist the senior citizens in filing complaints or charges against any individual, establishments, business entity, institution, or agency refusing to comply with the privileges under this Act before the Department of Justice (DOJ), the Provincial Prosecutor’s Office, the regional or the municipal trial court, the municipal trial court in cities, or the municipal circuit trial court.”</li>
                <li><Divider /></li>
            </ul>
        </div>
    </SiteLayout>
  )
}
