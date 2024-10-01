import React from 'react';
import AboutPageHero from './components/AboutPageHero/AboutPageHero';
import AboutPageSectionOne from './components/AboutPageSectionOne/AboutPageSectionOne';
import AboutPageSectionTwo from './components/AboutpageSectionTwo/AboutPageSectionTwo';
import Footer from '../components/Footer';
import AboutPageSectionThree from './components/AboutPageSectionThree/AboutPageSectionThree';
import AboutPageSectionFour from './components/AboutPageSectionFour/AboutPageSectionFour';

const Page = () => {
  return (
    <>
      <AboutPageHero />
      <AboutPageSectionOne />
      <AboutPageSectionTwo />
      <AboutPageSectionThree />
      <AboutPageSectionFour />
      <Footer />
    </>
  );
};

export default Page;
