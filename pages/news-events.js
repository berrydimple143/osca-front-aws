import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import { List, Space } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const info = [
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/10/07/elderly-week-funday-2022/',
    title: "ELDERLY WEEK -FUNDAY 2022",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news1.jpg",
    description: "Posted on October 7, 2022",
    content: "October 6, 2022 OSCA HEAD LUIS R.MORAN Speaks on the Privileges n benefits to group of Senior citizens in celebration of ELDERLY WEEK held At AMPC ACTIVITY CENTER Torres St., Davao City. Invited also as resource speakers from SSS and PHILHEALTH. ================================================= Please Like and Follow Us on Our Facebook",
  },
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/07/26/know-your-discounts-with-ra-9994/',
    title: "KNOW YOUR DISCOUNTS WITH RA 9994",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news2.png",
    description: "Posted on July 26, 2022",
    content: "All you need to Know about RA 9994",
  },
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/06/10/osca-newsletter-all-hands-on-helm/',
    title: "OSCA NEWSLETTER; ALL HANDS ON HELM",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news3.jpg",
    description: "Posted on June 10, 2022",
    content: "OSCA Head Ptr. Luis R. Moran (Left), Sun.Star Davao Managing Editor Mr. Alger P. Dura (Right) In line with the publication of BAGONG OSCA Newsletter, The Office for Senior Citizens Affairs invited Mr. Alger P. Dura to discuss the basics and fundamentals of writing a newsletter to the OSCA Publications team. OSCA Newsletter Team with continue reading : OSCA Newsletter; All hands on Helm",
  },
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/06/07/panukalang-p1k-monthly-pension-para-sa-senior-citizens/',
    title: "PANUKALANG P1K MONTHLY PENSION PARA SA SENIOR CITIZENS",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news4.png",
    description: "Posted on June 7, 2022",
    content: "UPDATE: LAGDA NA LAMANG NI PANGULONG RODRIGO DUTERTE ANG KULANG PARA MAAPRUBAHAN ANG INCREASE OF SOCIAL PENSION PARA SA MGA INDIGENT SENIOR CITIZENS.",
  },
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/06/07/reportorial-conference-osca-accomplishment-report/',
    title: "REPORTORIAL CONFERENCE – OSCA ACCOMPLISHMENT REPORT.",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news5.jpg",
    description: "Posted on June 7, 2022",
    content: "Reportorial Conference with FSCAP, NCSC, CSWDO and DSWD on June 7, 2022 at CSWDO Conference Hall. OSCA Head Ptr. Luis R. Moran presented the OSCA Accomplishment Report.",
  },
  {
    href: 'https://seniorcitizen.davaocity.gov.ph/index.php/2022/06/07/802/',
    title: "NCSC COMMISSIONER ROUTINE VISIT OF OSCA",
    avatar: "https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/images/news6.jpg",
    description: "Posted on June 7, 2022",
    content: "NCSC Commissioner Dr. Ida Yap-Patron and NCSC Staff Management took a routine visit of the Office for Senior Citizens Affairs (OSCA).",
  },
];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function NewsEvents() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - News & Events" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="NewsEvents"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            heading1="NEWS & EVENTS"
            textWidth="w-180"
        />
        <div className="flex flex-wrap justify-center items-left p-10">

            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 4,
              }}
              dataSource={info}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]}
                  extra={
                    <img
                      width={180}
                      alt="logo"
                      src={`${item.avatar}`}
                    />
                  }
                >
                  <List.Item.Meta
                    title={<a href={item.href} target='_blank' rel="noreferrer">{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />

        </div>
    </SiteLayout>
  )
}
