import Link from 'next/link';
import React from 'react';
import Cards from './Cards';

const LandingSectionTwo = () => {
  return (
    <>
      <section className="landingSectionTwo mx-2 mt-[6rem] text-fontPrimary flex justify-around items-center gap-5">
        <article className="max-w-[500px] w-full">
          <h2 className="text-4xl font-semibold mb-4">
            Track Customer, Sales & Order Booking
          </h2>
          <p className="text-fontSecondary">
            Get installed new inventory management & POS systems, customized for
            hypermarkets, boutique stores, and retail hubs.
          </p>
        </article>
        <article className="">
          <Link href={''} className="">
            <button className="py-3 px-8 bg-primary font-semibold rounded-lg text-white duration-500 hover:translate-y-[-5px]">
              Discover More
            </button>
          </Link>
        </article>
      </section>
      <Cards />
    </>
  );
};

export default LandingSectionTwo;
