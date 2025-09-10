export const Display = ({ color, name, pwd, show = "hidden" }) => {
  return (
    <div
      className={`${show} w-full h-30 flex place-content-center items-center bg-${color}-500 text-black font-mono text-[14px] text-pink-100 font-mono border-1 border-pink-400/30 rounded-3xl shadow-md`}
    >
      <p className="flex content-center items-center text-white text-center">
        Hi {name}! <br /> I got your password!😛 <br /> 👉🏼 {pwd} 👈🏼
      </p>
    </div>
  );
};
