import { Button } from "../components/Button";

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

export const Keypad = () => {
  return (
    <div className="w-91 h-51 gap-1 grid grid-cols-4">
      {keypadValues.map((keypadValue, i) => {
        return (
          <Button
            key={i + Math.random()}
            label={keypadValue.label}
            color={keypadValue.isOperand ? "#161619" : "indigo"}
          />
        );
      })}
    </div>
  );
};
