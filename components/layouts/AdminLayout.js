import React from 'react';
import Head from 'next/head';
import Sidebar from '../admin/Sidebar';
import Header from '../admin/Header';
import Breadcrumb from '../admin/Breadcrumb';

const AdminLayout = (props) => {
  return (
    <>
      <Head>
          <title>{ props.title }</title>
      </Head>
      <section className="flex gap-4">
        <Sidebar
            isDashboard={props.isDashboard}
            isMember={props.isMember}
            isUser={props.isUser}
            isReport={props.isReport}
            role={props.role}
        />
        <div className="flex flex-col" style={{ width: '1150px' }}>
          <Breadcrumb title={props.trail} />
          <div className="flex flex-col w-full gap-y-3">
            { props.children }
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLayout;
