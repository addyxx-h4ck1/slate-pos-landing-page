import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardOne = () => {
  return (
    <article className="rounded-lg p-6 py-8 flex gap-8 border-[.2px] border-[#80808017]">
      <div className="">
        <FontAwesomeIcon icon={faTimeline} className="text-4xl text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-3">Time management</h3>
        <p className="text-fontSecondary">
          Providing on-time completion of client-end web projects.
        </p>
      </div>
    </article>
  );
};

export default CardOne;
