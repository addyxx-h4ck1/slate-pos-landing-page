import React from 'react';

interface propTypes {
  Icon: JSX.Element;
  name: string;
  desciption: string;
}

const CardOne: React.FC<propTypes> = ({ desciption, Icon, name }) => {
  return (
    <article className="rounded-lg p-6 py-8 flex gap-8 border-[.2px] border-[#80808017]">
      <div className="">{Icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-3">{name}</h3>
        <p className="text-fontSecondary">{desciption}</p>
      </div>
    </article>
  );
};

export default CardOne;
