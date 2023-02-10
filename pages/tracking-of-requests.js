import { Tabs } from 'antd';
import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `First`,
    children: `Go to the registration page.`,
  },
  {
    key: '2',
    label: `Second`,
    children: `Register an account`,
  },
  {
    key: '3',
    label: `Third`,
    children: `Request login details to the site administrator`,
  },
  {
    key: '4',
    label: `Fourth`,
    children: `Login using the login page with your credentials`,
  },
];

const RequestTracking = () =>
{
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Online Tracking of Requests" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <div className="flex flex-col mt-10 py-20 px-10">
              <h1 className="text-xl font-bold">Requests Tracking</h1>
              <div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
        </div>
    </SiteLayout>
  )
}

export default RequestTracking;
