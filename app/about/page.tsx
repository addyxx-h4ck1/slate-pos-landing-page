import React from 'react';
import AboutPageHero from './components/AboutPageHero/AboutPageHero';
import AboutPageSectionOne from './components/AboutPageSectionOne/AboutPageSectionOne';
import AboutPageSectionTwo from './components/AboutpageSectionTwo/AboutPageSectionTwo';
import Footer from '../components/Footer';
import AboutPageSectionThree from './components/AboutPageSectionThree/AboutPageSectionThree';

const Page = () => {
  return (
    <>
      <AboutPageHero />
      <AboutPageSectionOne />
      <AboutPageSectionTwo />
      <AboutPageSectionThree />
      <Footer />
    </>
  );
};

export default Page;
