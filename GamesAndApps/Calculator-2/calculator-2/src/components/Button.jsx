'use client';

import { setLabel } from "../components/Display";

export const Button = ({ label, color }) => {
  return (
    <button
      className="w-[90px] h-[42px] flex place-content-center items-center text-[12px] rounded-3xl cursor-pointer hover:bg-amber-100"
      style={{ backgroundColor: `${color}` }}
      onClick={show(label)}
    >
      {label}
    </button>
  );
};
