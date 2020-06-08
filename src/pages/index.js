import React from 'react';
import Layout from '../components/layout';
import HotelImage from '../components/hotelImage';
import HomeContent from '../components/homeContent';

const IndexPage = () => {
  return (
    <Layout>
      <HotelImage />
      <HomeContent />
    </Layout>
  );
};

export default IndexPage;
