import React from 'react';
import CardOne from './CardOne';

const AboutPageSectionFour = () => {
  return (
    <section className="mt-[6rem] mx-2 text-fontPrimary flex flex-col justify-center items-center">
      <article className="mb-2 w-full flex justify-center items-center flex-col">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">
          Our IT & web-Enabled Services
        </h2>
        <p className="text-center text-fontSecondary w-full max-w-[600px]">
          Offering services that are tailored to the needs of software
          companies. We are also offering for custom App-based products &
          services.
        </p>
      </article>
      <article className="section-four w-full max-w-[900px] mt-6 px-4">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </article>
    </section>
  );
};

export default AboutPageSectionFour;
