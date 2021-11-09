import React from 'react';
import cntl from 'cntl';
import {Helmet} from 'react-helmet';
import logo from '../../images/Logo.png';

import Header from '../Header';
import Footer from '../Footer';
import NotificationBar from "../NotificationBar";
// import GetStartedModal from '../GetStartedModal';

const root = cntl`
w-screen
flex
flex-col
items-center
justify-center
`;
const content = cntl`
    max-w-max
    text-white
    text-base
    pb-lg
`;


const Layout = ({children}) => {
  return (
    <div className={root}>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Anubis LMS</title>
        <link rel="shortcut icon" href={logo} type="image/png" />
      </Helmet>
      <NotificationBar
        content='The Anubis LMS Application has a new look!'
        link='/blog/rebrand'
      />
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
