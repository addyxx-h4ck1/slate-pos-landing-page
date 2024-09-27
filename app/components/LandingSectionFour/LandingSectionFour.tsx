import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sectionImage from '@/public/section-four.svg';

const LandingSectionFour = () => {
  return (
    <section className="sectionfour mt-[6rem] text-fontPrimary mb-7 flex justify-around mx-2 gap-4">
      <article className="max-w-[500px] w-full">
        <h2 className="font-bold text-2xl mb-5 ">
          Interface-Rich Billing and POS Invoicing Tools
        </h2>
        <p className="text-fontSecondary mb-5 ">
          Efficient customer tracking, discount management, loyalty programs via
          POS systems
        </p>
        <section className="flex flex-col gap-7 px-3">
          <div className="flex gap-3">
            <div>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-fontPrimary font-semibold"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Customer & Sales Growth Tracking
              </h3>
              <p className="text-fontSecondary">
                Managing real-time data in an effective way.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-3">
            <div>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 font-semibold"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Interface-Rich POS Systems</h3>
              <p className="text-fontSecondary">
                Efficient customer tracking, discount management.
              </p>
            </div>
          </div>
        </section>
        <div className="px-2 mt-8">
          <Link href={''}>
            <button className="bg-primary text-white font-semibold rounded-lg duration-300 hover:translate-y-[-5px] py-3 px-8">
              Discover more
            </button>
          </Link>
        </div>
      </article>
      {/* IMage */}
      <article>
        <Image
          alt="dashboardcard"
          src={sectionImage}
          width={300}
          height={300}
          className="w-[100%] object-cover"
        />
      </article>
    </section>
  );
};

export default LandingSectionFour;
