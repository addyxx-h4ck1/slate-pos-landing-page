import Image from 'next/image';
import React from 'react';
import brandOne from '@/public/brands/brand1.svg';

const Brand = () => {
  return (
    <article className="flex justify-center items-center">
      <Image
        alt="brabdlogo"
        src={brandOne}
        width={100}
        height={100}
        className="w-[80px] h-[80px] object-cover grayscale transition-all duration-500 hover:grayscale-0"
      />
    </article>
  );
};

export default Brand;
