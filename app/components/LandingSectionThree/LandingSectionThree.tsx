import React from 'react';
import Brand from './Brand';

const LandingSectionThree = () => {
  return (
    <section className="mt-[6rem] text-fontPrimary flex justify-center items-center mx-2">
      <section className="max-w-[1100px] w-full">
        <h2 className="font-semibold text-lg md:text-xl capitalize text-center">
          Brands that trusted our latest POS software and systems
        </h2>
        <article className="my-5 flex justify-center items-center gap-6 flex-wrap">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </article>
      </section>
    </section>
  );
};

export default LandingSectionThree;
