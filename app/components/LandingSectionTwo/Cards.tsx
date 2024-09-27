import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const Cards = () => {
  return (
    <section className="mt-[6rem] text-fontPrimary flex justify-center items-center bg-[#F4F3F3] p-4 py-7">
      <article className="heroCards mt-4 w-full max-w-[1100px]">
        <CardOne />
        <CardTwo />
        <CardThree />
      </article>
    </section>
  );
};

export default Cards;
