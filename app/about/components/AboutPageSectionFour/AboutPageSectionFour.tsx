import React from 'react';
import CardOne from './CardOne';
import {
  faGear,
  faLineChart,
  faRocket,
  faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutPageSectionFour = () => {
  return (
    <section className="mt-[6rem] mx-2 text-fontPrimary flex flex-col justify-center items-center">
      <article className="mb-2 w-full flex justify-center items-center flex-col">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">
          Our IT & web-Enabled Services
        </h2>
        <p className="text-center text-fontSecondary w-full max-w-[600px]">
          Offering services that are tailored to the needs of software
          companies. We are also offering for custom App-based products &
          services.
        </p>
      </article>
      <article className="section-four w-full max-w-[900px] mt-6 px-4">
        <CardOne
          Icon={
            <FontAwesomeIcon
              icon={faTimeline}
              className="text-primary text-4xl"
            />
          }
          desciption={
            'Providing on-time completion of client-end web projects.'
          }
          name={'Time management'}
        />
        <CardOne
          Icon={
            <FontAwesomeIcon icon={faGear} className="text-primary text-4xl" />
          }
          desciption={'Ensuring a steady workflow via integration of new Apps.'}
          name={'Workflow Management'}
        />
        <CardOne
          Icon={
            <FontAwesomeIcon
              icon={faRocket}
              className="text-primary text-4xl"
            />
          }
          desciption={
            'Delivering quality solutions to web-based entities & firms.'
          }
          name={'Power Performance'}
        />
        <CardOne
          Icon={
            <FontAwesomeIcon
              icon={faLineChart}
              className="text-primary text-4xl"
            />
          }
          desciption={
            'Significant growth in the area of web applications & programs.'
          }
          name={'Unlimited Growth'}
        />
      </article>
    </section>
  );
};

export default AboutPageSectionFour;
