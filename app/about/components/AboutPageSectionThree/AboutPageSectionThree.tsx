import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import CardFour from './CardFour';

const AboutPageSectionThree = () => {
  return (
    <section className="mt-[6rem] px-2 py-12 bg-secondary text-fontPrimary flex justify-center items-center flex-col">
      <article className="mb-2 w-full ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">
          Software life-cycle process
        </h2>
        <p className="text-center">
          We evolve a scientific process software & Apps that fits in any
          business and concept
        </p>
      </article>
      <article className="software-process w-full max-w-[1100px] mt-6">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </article>
    </section>
  );
};

export default AboutPageSectionThree;
