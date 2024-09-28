import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface propTypes {
  duration: boolean;
  price: string;
}

const PriceCardBusiness: React.FC<propTypes> = ({ duration, price }) => {
  return (
    <div className="priceCard bg-white p-8 text-left flex flex-col relative">
      <h2 className="font-semibold text-lg mb-5">Business Pack</h2>
      <p className="">
        Create an impact for your clients by providing the best.
      </p>
      <div className="mt-5 flex flex-col gap-5">
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          Retail Management
        </p>
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          Dashboard Systems
        </p>
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          Warehousing
        </p>
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          Inventory Tracking
        </p>
        <p className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
          Mobile Solutions
        </p>
      </div>
      <div className="mt-8 self-center w-full  flex gap-5 items-center">
        <h2 className="font-black text-5xl">{'$' + ' ' + price}</h2>
        <div className="text-left text-sm">
          <p className="font-semibold">Per User</p>
          <p className="font-semibold text-fontSecondary">
            {duration ? 'Per Month' : 'Per Year'}
          </p>
        </div>
      </div>
      <div className="mt-8 self-center w-full flex justify-center items-center">
        <button className="px-12 w-full py-3 bg-primary text-white font-semibold duration-300 hover:translate-y-[-5px] rounded-md">
          Select Plan
        </button>
      </div>
      <div className="py-2 px-6 bg-[#1FAD95] text-white font-semibold absolute top-[0] right-0 rounded-md text-xs">
        Popular
      </div>
    </div>
  );
};

export default PriceCardBusiness;
