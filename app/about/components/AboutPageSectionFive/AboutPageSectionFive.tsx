import React from 'react';
import Counter from './Counter';

const AboutPageSectionFive = () => {
  return (
    <section className="mt-[6rem] px-4 py-14 bg-tertiary flex justify-center items-center flex-col">
      <article className="counter-wrapper w-full max-w-[1000px] flex justify-between items-center">
        <Counter
          name={'Satisfied Clients'}
          count={2600}
          sym="k"
          div={1000}
          decimal={1}
        />
        <Counter name={'Campaigns'} count={463} sym="+" decimal={0} div={1} />
        <Counter
          name={'Global Presence'}
          count={374}
          sym="+"
          decimal={2}
          div={100}
        />
        <Counter
          name={'Recognitions'}
          count={6580}
          sym="k"
          div={1000}
          decimal={2}
        />
      </article>
    </section>
  );
};

export default AboutPageSectionFive;
