'use client';
import React, { useState } from 'react';
import PriceCardBasic from './PriceCardBasic';
import PriceCardBusiness from './PriceCardBusiness';
import PriceCardEnterprise from './PriceCardEnterprise';

const LandingSectionEight = () => {
  const [monthly, setMonthly] = useState<boolean>(true);

  const tooglePriceDuration = () => {
    setMonthly(!monthly);
  };

  return (
    <section className="mt-[6rem] text-fontPrimary flex justify-center items-center flex-col bg-tertiary py-10 px-2">
      <section className="w-full max-w-[1000px] text-center flex justify-center items-center flex-col ">
        <h2 className="text-3xl font-semibold w-full max-w-[500px] mb-5">
          Our Affordable Pricing Plans
        </h2>
        <p className="w-full max-w-[700px] mb-5 text-fontSecondary">
          Choose a dedicated POS package from the list. We offer bespoke
          inventory & sales plans to suit diverse client needs.
        </p>
      </section>
      <section className="w-full max-w-[1000px] text-center flex justify-center items-center flex-col text-fontPrimary">
        <article className="flex items-center text-sm font-semibold justify-between bg-secondary rounded-3xl">
          <button
            className={`${
              monthly
                ? 'bg-primary text-white'
                : 'bg-transparent text-fontPrimary'
            } p-3 px-6 rounded-3xl transition-all duration-300`}
            onClick={tooglePriceDuration}
          >
            Monthly
          </button>
          <button
            className={`${
              !monthly
                ? 'bg-primary text-white'
                : 'bg-transparent text-fontPrimary'
            } p-3 px-6 rounded-3xl transition-all duration-300`}
            onClick={tooglePriceDuration}
          >
            Annually
          </button>
        </article>
        <article className="mt-7 w-full priceCardsSection">
          <PriceCardBasic
            duration={monthly ? true : false}
            price={monthly ? '0' : '0'}
          />
          <PriceCardBusiness
            duration={monthly ? true : false}
            price={monthly ? '16' : '155'}
          />
          <PriceCardEnterprise
            duration={monthly ? true : false}
            price={monthly ? '24' : '200'}
          />
        </article>
      </section>
    </section>
  );
};

export default LandingSectionEight;
