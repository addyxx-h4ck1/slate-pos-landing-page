import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const CardTwo = () => {
  return (
    <div className="flex gap-3 w-full mb-6 max-w-[450px] bg-white p-4 rounded-lg">
      <div className="w-[50px] h-[50px] rounded-lg bg-[#6F60FF] flex justify-center items-center">
        <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[white] flex justify-center items-center">
          <FontAwesomeIcon icon={faBox} className="text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Dedicated Inventory Suite</h4>
        <p className="text-fontSecondary text-sm">
          Customized systems for eCommerce outlets.
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
