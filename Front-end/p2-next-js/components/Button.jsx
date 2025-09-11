
// BUTTON COMPONENTS

// 1. Button with only Label
export const Button = (props) => {
  const { label, clicked } = props;

  return (
    <button
      className={`w-25 h-10 text-black text-[12px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={clicked}
    >
      {label}
    </button>
  );
};


// 2. Button with Link
export const ButtonWithLink = (props) => {
  const { label, clicked, link } = props;

  return (
    <button
      className={`w-50 h-10 text-black text-[12px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={clicked}
    >
      <a className="flex w-full h-full place-content-center items-center flex-grow rounded-4xl" href={link}>{label}</a>
    </button>
  );
};


// 3. Back Button - Button with homepage link
export const HomeButton = (props) => {
  const { label, clicked, link } = props;

  return (
    <button
      className={`w-25 h-10 absolute bottom-70 right-40 text-white text-[12px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={clicked}
    >
      {/* {label} */}
      <a className="flex w-full h-full place-content-center items-center flex-grow rounded-4xl" href={link}>{label}</a>
    </button>
  );
};


// 4. Button with color props through label value
export const ButtonWColor = (props) => {
  const { label, clicked } = props;

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


// 5. Other component state changer Button - username,
export const LoginButton = (props) => {
  const { label, setUsername, setPassword, username, password, setUserInfo } =
    props;

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
      {label}
    </button>
  );
};
