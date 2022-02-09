import React from 'react';
import cntl from 'cntl';
import {Helmet} from 'react-helmet';
import logo from '../../images/Logo.png';

import Header from '../Header';
import Footer from '../Footer';
import NotificationBar from "../NotificationBar";
// import GetStartedModal from '../GetStartedModal';

const root = cntl`
max-w-max
flex
flex-col
items-center
justify-center
`;
const content = cntl`
    max-w-fit
    text-white
    text-base
    pb-lg
`;

/* Add the responsive design to Layout below */

const Layout = ({children}) => {
  return (
    <div className={root}>
      {/* This Helmet is for the browser tab name and logo */}
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Anubis LMS</title>
        <link rel="shortcut icon" href={logo} type="image/png" />
      </Helmet>
      {/*<NotificationBar*/}
      {/*  content='The Anubis LMS Application has a new look!'*/}
      {/*  link='/blog/rebrand'*/}
      {/*/>*/}
      {/* Header is where the Anubis logo, for educators, for students, etc reside in*/}
      <Header/>
      <div className={content}>
        <main>{children}</main>
        <Footer/>
        {/*<GetStartedModal />*/}
      </div>
    </div>
  )
}

export default Layout;
