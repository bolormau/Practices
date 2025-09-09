"use client";

import { clicked } from "../components/Display";

export const Button = ({ children, color }) => {
  function handleClick() {}

  return (
    <button
      className="w-[90px] h-[42px] flex place-content-center items-center text-[12px] rounded-3xl cursor-pointer hover:bg-amber-100"
      style={{ backgroundColor: `${color}` }}
      onClick={clicked(children)}
    >
      {children}
    </button>
  );
};
