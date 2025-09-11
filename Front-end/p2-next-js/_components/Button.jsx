import { Display } from "../_components/Display";

export const Button = ({ label, clicked }) => {
  return (
    <button
      className={`w-25 h-10 text-black text-[14px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={clicked}
    >
      {label}
    </button>
  );
};

export const Button2 = ({ label, clicked }) => {
  return (
    <button
      className={`w-25 h-10 text-black text-[14px] font-mono rounded-4xl cursor-pointer
        ${
          label === "pink"
            ? "bg-pink-500 hover:bg-pink-400"
            : "bg-purple-500 hover:bg-purple-400"
        }
        `}
      onClick={clicked}
    >
      {label}
    </button>
  );
};

export const Button3 = ({
  setUsername,
  setPassword,
  setUserInfo,
  username,
  password,
}) => {
  return (
    <button
      className={`w-25 h-10 text-black text-[14px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={() => {
        setUserInfo(username, password);
        setUsername("");
        setPassword("");
      }}
    >
      log-in
    </button>
  );
};
