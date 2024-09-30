import React from 'react';
import BrandsSlider from './BrandsSlider';

const LandingSectionThree = () => {
  return (
    <section className="mt-[6rem] text-fontPrimary flex justify-center items-center mx-2">
      <section className="max-w-[900px] w-full">
        <h2 className="font-semibold text-lg md:text-xl capitalize text-center mb-7">
          Brands that trusted our latest POS software and systems
        </h2>
        <article className="my-5 w-full flex justify-center items-center">
          <BrandsSlider />
        </article>
      </section>
    </section>
  );
};

export default LandingSectionThree;
