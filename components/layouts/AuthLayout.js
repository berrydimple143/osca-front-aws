import React from 'react';
import Head from 'next/head';

const AuthLayout = (props) => {
  return (
    <>
      <Head>
          <title>{ props.title }</title>
      </Head>
        { props.children }
    </>
  )
}

export default AuthLayout;
