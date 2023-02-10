import React from 'react';
import { Space } from 'antd';
import { CommentOutlined, FacebookFilled, PhoneFilled } from '@ant-design/icons';

const Contact = () =>
{
    return (
        <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-xl font-bold text-fifth">KEEP IN TOUCH</h2>
            <h1 className="text-6xl text-fourth font-bold">CONTACT US</h1>
            <div className="flex flex-wrap justify-center items-center text-xl text-fourth">
                <Space className="px-5 cursor-pointer">
                    <p><FacebookFilled /></p>
                    <p>OSCA Office Bulacan</p>
                </Space>
                <Space className="px-5 cursor-pointer">
                    <p><PhoneFilled /></p>
                    <p>+6391 234 5678</p>
                </Space>
                <Space className="px-5 cursor-pointer">
                    <p><CommentOutlined /></p>
                    <p>OSCA Office Bulacan</p>
                </Space>
            </div>
        </div>
    );
}

export default Contact;
