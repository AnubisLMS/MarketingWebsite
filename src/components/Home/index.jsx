import React from 'react';

import Layout from '../Layout';
import Hero from './Hero';
import WithWithout from './WithWithout';
import AppBlocks from "./AppBlocks";
import CommunityShowcase from './CommunityShowcase';
import InterestedBlock from "./InterestedBlock";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div id='educators'/>
      <WithWithout />
      <div id='students'/>
      <AppBlocks />
      <CommunityShowcase />
      <InterestedBlock />
    </Layout>
  )
}

export default Home;
