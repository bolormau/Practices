'use client';

import { useState } from 'react';

export const Display = ( { result, equation } ) => {
  return (
    <div className="display w-90 h-20 flex flex-col place-content-end items-end border-[0.1px] py-1 px-4 border-[#444476] rounded-3xl">
      <p className="equation h-3 text-[12px] opacity-50">equation{ equation }</p>
      <p className="result text-[20px]">result{ result }</p>
    </div>
  );
};

export const Equation = (value) => {
  const [label, setLabel] = useState("");

  setLabel(label)
  // if(clicked() != null) {
  //   setLabel(label + " " + clicked());
  // }
  // const show = (value) => {
    
  // }

  return (
    <p className="equation h-3 text-[12px] opacity-50">
      { label }     
    </p>
  );
};

