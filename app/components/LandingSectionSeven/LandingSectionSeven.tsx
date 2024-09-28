import React from 'react';
import CardOne from './CardOne';
import Image from 'next/image';
import sectionImage from '@/public/pos-rocket.png';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const LandingSectionSeven = () => {
  return (
    <section className="mt-[6rem] mx-2 text-fontPrimary flex justify-center items-center flex-col">
      <section className="w-full max-w-[1000px] text-center flex justify-center items-center flex-col">
        <h2 className="text-3xl font-semibold w-full max-w-[500px] mb-5">
          Deliver <span className="text-primary">End-to-End</span> Retail
          Billing & Inventory Solutions
        </h2>
        <p className="w-full max-w-[700px] mb-5 text-fontSecondary">
          Our Cloud integrated POS software helps in seamless, efficient, smooth
          & quick business TaT. This is the era of Cloud.
        </p>
      </section>
      <section className="statcards mt-6 w-full max-w-[1000px]">
        <CardOne />
        <CardTwo />
        <CardThree />
      </section>
      <Image
        alt="rocket"
        src={sectionImage}
        unoptimized
        className="w-[60px] object-cover"
      />
    </section>
  );
};

export default LandingSectionSeven;
