import React from 'react';
import cntl from 'cntl';

import Header from '../Header';
import Footer from '../Footer';
// import GetStartedModal from '../GetStartedModal';

const root = cntl`
    max-w-max
    text-white
    text-base
    pb-lg
`;


const Layout = ({ children }) => {
  return (
    <div className={root}>
      <Header />
      <main>{children}</main>
      <Footer />
      {/*<GetStartedModal />*/}
    </div>
  )
}

export default Layout;
