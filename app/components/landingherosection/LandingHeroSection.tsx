import React from 'react';
import Navbar from '../Navbar';
import HeroImage from '@/public/pos-banner-mobile.svg';
import Image from 'next/image';
import Link from 'next/link';

const LandingHeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-secondary pb-5">
      <Navbar />
      <article className="heromain mt-5 flex justify-center items-center gap-4 mx-2">
        <div className="max-w-[500px]">
          <h1 className="text-5xl font-bold mb-5">
            Latest POS Systems & Management
          </h1>
          <p className="text-fontSecondary">
            Catering to the needs of small mid-level enterprises.
          </p>
          <div className="my-5">
            <button className="py-3 px-8 rounded-lg font-semibold bg-primary duration-500 text-white hover:translate-y-[-5px]">
              Get Started
            </button>
          </div>
          <div>
            <p>
              Start your{' '}
              <Link href={''} className="text-primary underline">
                21 days FREE trial now!
              </Link>
            </p>
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="image"
          width={300}
          height={300}
          className="w-[44%] object-cover"
        />
      </article>
    </section>
  );
};

export default LandingHeroSection;
