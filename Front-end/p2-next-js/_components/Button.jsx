export const Button = ( {label, clicked} ) => {
  return (
    <button 
      className={`w-25 h-10 text-black text-[14px] font-mono bg-pink-500 rounded-4xl cursor-pointer hover:bg-pink-400
      `}
      onClick={clicked}>
      {label}
    </button>
  );
};