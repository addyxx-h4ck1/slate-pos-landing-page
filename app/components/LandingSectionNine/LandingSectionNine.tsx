import React from 'react';
import ReviewCard from './ReviewCard';

const LandingSectionNine = () => {
  return (
    <section className="mt-[6rem] text-fontPrimary flex justify-center items-center flex-col">
      <section className="w-full max-w-[1000px] text-center flex justify-center items-center flex-col ">
        <h2 className="text-3xl font-semibold w-full max-w-[500px] mb-5">
          What Our Clients Speak About Us!
        </h2>
        <p className="w-full max-w-[700px] mb-5 text-fontSecondary">
          Know what our esteemed clients/customers have to say about us in the
          area of POS management, systems, software, & customized tools.
        </p>
      </section>
      <section className="w-full mt-5 max-w-[1000px] text-center flex justify-center items-center flex-col ">
        <ReviewCard />
      </section>
    </section>
  );
};

export default LandingSectionNine;
