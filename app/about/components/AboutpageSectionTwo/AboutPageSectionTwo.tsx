import Image from 'next/image';
import React from 'react';
import sectionImage from '@/public/about/about-work-men.png';
import Progress from './Progress';

const AboutPageSectionTwo = () => {
  return (
    <section className="about-section-two mt-[6rem] mx-2 flex justify-around items-center gap-7 text-fontPrimary">
      <article className="w-full max-w-[500px]">
        <h2 className="font-semibold text-3xl md:text-4xl mb-5">
          Globally Certified Apps
        </h2>
        <p className="text-fontSecondary mb-4">
          Our name is synonymous with mobile/ Android Apps development &
          software, apart from CRM design solutions.
        </p>
        <section className="mt-5 px-5">
          <Progress color="bg-primary" name="Latest technology" value={80} />
          <Progress color="bg-blue-600" name="Responsive Design" value={70} />
          <Progress color="bg-green-600" name="Efficiency" value={90} />
        </section>
      </article>
      <Image
        alt="image"
        src={sectionImage}
        width={900}
        height={900}
        className="w-[40%] object-cover"
      />
    </section>
  );
};

export default AboutPageSectionTwo;
