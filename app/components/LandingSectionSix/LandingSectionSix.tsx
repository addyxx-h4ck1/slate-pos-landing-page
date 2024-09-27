import React from 'react';
import CardOne from './CardOne';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const LandingSectionSix = () => {
  return (
    <section className="mt-[6rem] flex justify-center items-center bg-tertiary py-14">
      <section className="sectionfive w-full max-w-[1300px] mx-2 flex justify-between gap-7">
        <article className="w-full flex flex-col justify-center items-center">
          <CardOne />
          <CardTwo />
          <CardThree />
        </article>
        <article className="w-full">
          <h2 className="text-3xl font-semibold capitalize mb-4">
            Avail our Free POS Trial
          </h2>
          <p>
            Get <span className="text-primary">first-hand experience</span> of
            our advanced POS software now!
          </p>
          <section className=" w-full mt-6 flex flex-col gap-10 justify-center">
            <article className="flex gap-4  ">
              <div className="">
                <FontAwesomeIcon icon={faCheck} className="text-green-500" />
              </div>
              <div className="">
                <h4 className="font-semibold capitalize">
                  Exclusively for Retail Chains
                </h4>
                <p className=" text-fontSecondary mt-3">
                  Offer inventory, sales, order booking & other integrated
                  solutions via our POS.
                </p>
              </div>
            </article>
            <article className="flex gap-4 ">
              <div className="">
                <FontAwesomeIcon icon={faCheck} className="text-green-500" />
              </div>
              <div className="">
                <h4 className="font-semibold capitalize">
                  Enhanced Service Experience
                </h4>
                <p className=" text-fontSecondary mt-3">
                  Get an impressive feel by using our Cloud-based POS systems.
                </p>
              </div>
            </article>
          </section>
        </article>
      </section>
    </section>
  );
};

export default LandingSectionSix;
