import React from 'react';

interface propTypes {
  value: number;
  color: string;
  name: string;
}

const Progress: React.FC<propTypes> = ({ value, color, name }) => {
  return (
    <article className="w-full text-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <p>{name}</p>
        <p>{value}%</p>
      </div>
      <div className="w-full rounded-md bg-slate-300">
        <div className={`w-[${value}%] ${color} p-[3px] rounded-md`}></div>
      </div>
    </article>
  );
};

export default Progress;
