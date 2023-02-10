import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Form, Input, message } from 'antd';
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import ContactPage from '../components/front/Contact';
import AuthButton from '../components/AuthButton';
import { sendEmail } from '../services/dataService';
const { TextArea } = Input;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) =>
  {
    setSending(true);
    const { send_status } = await sendEmail(values);
    console.log(send_status);
    setSending(false);
    if(send_status == "success"){
        message.success('Message sent successfully.');
        router.reload(window.location.pathname);
    } else {
        form.resetFields();
        message.error('There was a problem encountered.');
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Contact Us" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        {(sending) && (
            <ModalLoading
                  message="Sending, please wait ..."
                  pcolor="bg-green-500"
            />
        )}
        <Hero
            page="contact"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            heading1="CONTACT US"
            textWidth="w-180"
        />
        <div className="flex flex-wrap justify-center items-start py-10">
            <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 3xl:w-2/5 px-20">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item label="Your Name" name="name" rules={[{ required: true, message: 'Name is required.' }]}>
                        <Input style={{ width: '380px' }} size="large" />
                    </Form.Item>
                    <Form.Item label="Your Email" name="email" rules={[{ required: true, message: 'Email is required.' }]}>
                        <Input style={{ width: '380px' }} size="large" />
                    </Form.Item>
                    <Form.Item label="Subject" name="subject" rules={[{ required: true, message: 'Subject is required.' }]}>
                        <Input style={{ width: '380px' }} size="large" />
                    </Form.Item>
                    <Form.Item label="Message (upto 1000 characters only)" name="message" rules={[{ required: true, message: 'Message is required.' }]}>
                        <TextArea style={{ width: '400px' }} size="large" maxLength={1000} rows={5} />
                    </Form.Item>
                    <Form.Item>
                        <AuthButton
                            icon='arrow_down'
                            text='Send'
                            classType='px-12 py-2 mr-5 border rounded-none btn-main bg-active uppercase text-xl'
                            animation='animate-bounce'
                        />
                    </Form.Item>
                </Form>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 3xl:w-3/5">
                <ContactPage />
            </div>
        </div>
    </SiteLayout>
  )
}
