import Image from 'next/image';
import React from 'react';
import sectionImage from '@/public/about/about1-img1.jpg';

const AboutPageSectionOne = () => {
  return (
    <section className="about-section-one mt-[6rem] mx-2 flex justify-around items-center gap-7 text-fontPrimary">
      <Image
        alt="image"
        src={sectionImage}
        width={900}
        height={900}
        className="w-[40%] object-cover"
      />
      <article className="w-full max-w-[500px]">
        <h2 className="font-semibold text-3xl md:text-4xl mb-5">
          We make business-centric Apps & Software
        </h2>
        <p className="text-fontSecondary mb-4">
          Go for our versatile company software & Apps that cater to wide client
          base across domains. We offer smart software-based solutions to
          companies and entities that are in the domain of IT, software and
          Apps.
        </p>
      </article>
    </section>
  );
};

export default AboutPageSectionOne;
