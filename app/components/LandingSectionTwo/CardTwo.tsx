import Link from 'next/link';
import React from 'react';

const CardTwo = () => {
  return (
    <article className="rounded-md bg-white p-4  h-[250px] flex flex-col justify-between">
      <div className="flex w-full items-center gap-4 flex-wrap">
        <div className="bg-[#1FAE96] text-white rounded-lg w-[50px] h-[50px] flex justify-center items-center">
          <p className="border-[2px] border-white rounded-full w-[40px] h-[40px] flex justify-center items-center font-black">
            S
          </p>
        </div>
        <div className="">
          <h4 className="text-sm">
            Store Chain <span className="text-fontSecondary">Optimization</span>{' '}
          </h4>
        </div>
      </div>
      <div className="">
        <h4 className="font-medium mb-3 text-lg md:text-xl capitalize">
          Integrating chain of stores with POS systems...
        </h4>
        <p className="text-fontSecondary mb-3">Store chain integration.</p>
        <Link
          href={''}
          className="text-primary duration-500 hover:underline pb-3"
        >
          Discover more
        </Link>
      </div>
    </article>
  );
};

export default CardTwo;
