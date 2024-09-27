import React from 'react';
import LandingHeroSection from './components/landingherosection/LandingHeroSection';
import LandingSectionTwo from './components/LandingSectionTwo/LandingSectionTwo';
import LandingSectionThree from './components/LandingSectionThree/LandingSectionThree';
import LandingSectionFour from './components/LandingSectionFour/LandingSectionFour';

const Page = () => {
  return (
    <section className="">
      <LandingHeroSection />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
    </section>
  );
};

export default Page;
