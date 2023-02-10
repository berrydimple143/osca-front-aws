import React, { useState, useEffect } from "react";
import Hero from '../components/front/Hero';
import Gallery from '../components/front/Gallery';
import About from '../components/front/About';
import Corner from '../components/front/Corner';
import Charter from '../components/front/Charter';
import ContactPage from '../components/front/Contact';
import SiteLayout from '../components/layouts/SiteLayout';
import ModalLoading from '../components/ModalLoading';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Home" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            heading1="Office of the Senior Citizen's Affairs"
            buttontext1="Log In OSCA Admin"
            buttontext2="Register for member ID"
            page="index"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            textWidth="w-180"
        />
        <Gallery />
        <About />
        <Corner page="home" />
        <Charter />
        <ContactPage />
    </SiteLayout>
  )
}
