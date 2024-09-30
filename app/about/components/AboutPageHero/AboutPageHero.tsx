import React from 'react';
import Navbar from '../../../components/Navbar';
import HeroImage from '@/public/about/about-banner-hero.png';
import Image from 'next/image';

const AboutPageHero = () => {
  return (
    <section className="min-h-screen w-full bg-tertiary pb-5">
      <Navbar />
      <article className="heromain mt-[4rem] md:mt-5 flex justify-center items-center gap-4 mx-2">
        <div className="w-full max-w-[600px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Slate - Software & App-Based Entity
          </h1>
          <p className="text-fontSecondary">
            We offer smart software-based solutions to companies and entities
            that are in the domain of IT, software and Apps.
          </p>
        </div>
        <Image
          src={HeroImage}
          alt="image"
          width={600}
          height={600}
          className="w-[40%] object-cover"
        />
      </article>
    </section>
  );
};

export default AboutPageHero;
