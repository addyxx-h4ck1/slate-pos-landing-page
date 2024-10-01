import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardOne = () => {
  return (
    <article className="flex justify-center items-center flex-col gap-5 p-4">
      <div className="w-[130px] h-[130px] rounded-full flex justify-center items-center bg-primary">
        <FontAwesomeIcon icon={faGlobe} className="text-5xl text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center">1</h3>
        <h3 className="font-semibold text-lg text-center">Web Analytics</h3>
      </div>
    </article>
  );
};

export default CardOne;
