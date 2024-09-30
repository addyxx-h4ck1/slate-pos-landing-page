import React from 'react';
import AboutPageHero from './components/AboutPageHero/AboutPageHero';
import AboutPageSectionOne from './components/AboutPageSectionOne/AboutPageSectionOne';
import AboutPageSectionTwo from './components/AboutpageSectionTwo/AboutPageSectionTwo';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <>
      <AboutPageHero />
      <AboutPageSectionOne />
      <AboutPageSectionTwo />
      <Footer />
    </>
  );
};

export default Page;
