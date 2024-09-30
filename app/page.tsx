import React from 'react';
import LandingHeroSection from './components/landingherosection/LandingHeroSection';
import LandingSectionTwo from './components/LandingSectionTwo/LandingSectionTwo';
import LandingSectionThree from './components/LandingSectionThree/LandingSectionThree';
import LandingSectionFour from './components/LandingSectionFour/LandingSectionFour';
import LandingSectionFive from './components/LandingSectionFive/LandingSectionFive';
import LandingSectionSix from './components/LandingSectionSix/LandingSectionSix';
import LandingSectionSeven from './components/LandingSectionSeven/LandingSectionSeven';
import LandingSectionEight from './components/LandingSectionEight/LandingSectionEight';
import LandingSectionNine from './components/LandingSectionNine/LandingSectionNine';

const Page = () => {
  return (
    <section>
      <LandingHeroSection />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
      <LandingSectionFive />
      <LandingSectionSix />
      <LandingSectionSeven />
      <LandingSectionEight />
      <LandingSectionNine />
    </section>
  );
};

export default Page;
