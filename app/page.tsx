import React from 'react';
import LandingHeroSection from './components/landingherosection/LandingHeroSection';
import LandingSectionTwo from './components/LandingSectionTwo/LandingSectionTwo';
import LandingSectionThree from './components/LandingSectionThree/LandingSectionThree';
import LandingSectionFour from './components/LandingSectionFour/LandingSectionFour';
import LandingSectionFive from './components/LandingSectionFive/LandingSectionFive';
import LandingSectionSix from './components/LandingSectionSix/LandingSectionSix';

const Page = () => {
  return (
    <section className="">
      <LandingHeroSection />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
      <LandingSectionFive />
      <LandingSectionSix />
    </section>
  );
};

export default Page;
