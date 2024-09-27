import React from 'react';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardOne = () => {
  return (
    <div className="flex gap-3 w-full mb-6 max-w-[400px] bg-white p-4 rounded-lg">
      <div className="w-[50px] h-[50px] rounded-lg bg-[#F69E22] flex justify-center items-center">
        <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[white] flex justify-center items-center">
          <FontAwesomeIcon icon={faLightbulb} className="text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Innovative Retail Solutions</h4>
        <p className="text-fontSecondary text-sm">
          POS benefiting the retail industry globally.
        </p>
      </div>
    </div>
  );
};

export default CardOne;
