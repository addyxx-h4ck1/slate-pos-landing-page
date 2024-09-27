import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const CardThree = () => {
  return (
    <div className="flex gap-3 w-full mb-6 max-w-[400px] bg-white p-4 rounded-lg">
      <div className="w-[50px] h-[50px] rounded-lg bg-[#1AA68E] flex justify-center items-center">
        <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[white] flex justify-center items-center">
          <FontAwesomeIcon icon={faCircleDot} className="text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold capitalize">Who is there moto</h4>
        <p className="text-fontSecondary text-sm">
          Using Cloud for tracking new customers.
        </p>
      </div>
    </div>
  );
};

export default CardThree;
