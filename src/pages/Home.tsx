import React from 'react';
import { Hero } from '../components/Hero';
import { VisionWidget } from '../components/VisionWidget';
import { Testimonials } from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <VisionWidget />
      <Testimonials />
    </>
  );
};

export default Home;
