"use client";

import { useState } from "react";
// import { Button } from "../components/Button";

export const Body = () => {
  const [label, setLabel] = useState("");

  return (
    <>
      <Keypad
        labeling={(value) => {
          setLabel(label + " " + value);
        }}
      />
      <Display equation={label} />
    </>
  );
};

export const Keypad = () => {
  return (
    <div className="w-91 h-51 gap-1 grid grid-cols-4">
      {keypadValues.map((keypadValue, i) => {
        return (
          <Button
            key={i + Math.random()}
            clicked={() => {
              labeling(keypadValue.label);
            }}
            color={keypadValue.isOperand ? "#161619" : "indigo"}
          >
            {keypadValue.label}
          </Button>
        );
      })}
    </div>
  );
};

export const Button = ({ children, color, labeling }) => {
  return (
    <button
      className="w-[90px] h-[42px] flex place-content-center items-center text-[12px] rounded-3xl cursor-pointer hover:bg-amber-100"
      style={{ backgroundColor: `${color}` }}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export const Display = ({ equation }) => {
  return (
    <div className="display w-90 h-20 flex flex-col place-content-end items-end border-[0.1px] py-1 px-4 border-[#444476] rounded-3xl">
      <p className="equation h-3 text-[12px] opacity-50">equation{equation}</p>
      <p className="result text-[20px]">result{result}</p>
    </div>
  );
};

const keypadValues = [
  {
    label: "(",
    isOperand: false,
  },
  {
    label: ")",
    isOperand: false,
  },
  {
    label: "%",
    isOperand: false,
  },
  {
    label: "AC",
    isOperand: false,
  },
  {
    label: 7,
    isOperand: true,
  },
  {
    label: 8,
    isOperand: true,
  },
  {
    label: 9,
    isOperand: true,
  },
  {
    label: "÷",
    isOperand: false,
  },
  {
    label: 4,
    isOperand: true,
  },
  {
    label: 5,
    isOperand: true,
  },
  {
    label: 6,
    isOperand: true,
  },
  {
    label: "x",
    isOperand: false,
  },
  {
    label: 1,
    isOperand: true,
  },
  {
    label: 2,
    isOperand: true,
  },
  {
    label: 3,
    isOperand: true,
  },
  {
    label: "-",
    isOperand: false,
  },
  {
    label: 0,
    isOperand: true,
  },
  {
    label: ".",
    isOperand: true,
  },
  {
    label: "=",
    isOperand: false,
  },
  {
    label: "+",
    isOperand: false,
  },
];
