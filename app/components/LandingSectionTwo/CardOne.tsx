import Link from 'next/link';
import React from 'react';

const CardOne = () => {
  return (
    <article className="rounded-md bg-white p-4  h-[250px] flex flex-col justify-between">
      <div className="flex w-full items-center gap-4 flex-wrap">
        <div className="bg-fontPrimary text-white rounded-lg w-[50px] h-[50px] flex justify-center items-center">
          <p className="border-[2px] border-white rounded-full w-[40px] h-[40px] flex justify-center items-center font-black">
            C
          </p>
        </div>
        <div className="">
          <h4 className="text-sm">
            Cloud-Centric <span className="text-fontSecondary">POS</span>{' '}
          </h4>
        </div>
      </div>
      <div className="">
        <h4 className="font-medium mb-3 text-lg md:text-xl capitalize">
          Cloud-based POS software for retail chains…
        </h4>
        <p className="text-fontSecondary mb-3">Streamlining your sales.</p>
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

export default CardOne;
