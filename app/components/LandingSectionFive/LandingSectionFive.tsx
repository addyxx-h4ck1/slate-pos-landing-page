import Image from 'next/image';
import React from 'react';
import sectionImage from '@/public/pos-new-dashboard.png';

const LandingSectionFive = () => {
  return (
    <section className="mt-[6rem] flex justify-center items-center mx-2">
      <section className="max-w-[1100px] w-full flex flex-col items-center">
        <h2 className="font-bold text-4xl text-center mb-4">
          Interface-Rich POS Systems & New Software
        </h2>
        <p className="text-fontSecondary mb-6 max-w-[500px] w-full text-center">
          Our POS software is equipped with interface features that
          scientifically manage your brand. Offering flexible payment options
          via kiosk systems.
        </p>
        <Image
          alt="dashboard"
          src={sectionImage}
          width={600}
          height={600}
          className="w-[90%] object-cover"
        />
      </section>
    </section>
  );
};

export default LandingSectionFive;
