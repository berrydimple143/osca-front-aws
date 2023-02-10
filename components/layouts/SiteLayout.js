import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../front/parts/Footer';
import DirectContact from '../front/parts/DirectContact';
import ChatForm from '../forms/ChatForm';
import Navbar from '../front/parts/Navbar';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';

const SiteLayout = (props) => {
  const [showChat, setShowChat] = useState(false);

  const onClick = () =>
  {
    setShowChat(!showChat);
  }

  return (
    <>
      <Head>
          <title>{ props.title }</title>
      </Head>
      <Navbar />
        { props.children }
      <DirectContact
        onClick={onClick}
        buttonClass="fixed z-40 bottom-5 right-8 bg-yellow-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-yellow-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        title="Chat Us Now"
        icon={<MessageOutlined />}
      />
      <DirectContact
        buttonClass="fixed z-40 bottom-5 right-26 bg-yellow-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-yellow-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        title="Call Us Now"
        icon={<PhoneOutlined />}
      />
      { showChat && (
        <div className="fixed z-50 bottom-80 right-3 w-96 h-36 drop-shadow-lg">
          <ChatForm setShowChat={setShowChat} />
        </div>
      )}
      <Footer setLoading={props.setLoading} />
    </>
  )
}

export default SiteLayout;
