export const Display = (props) => {
  const { color, name, pwd, show = "hidden" } = props;

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

export const DisplayTimetable = (props) => {
  const { color, name, pwd, show = "flex" } = props;

  return (
    <div
      className={`${show} w-80 h-30 flex flex-col place-content-center items-center text-black font-mono text-[14px] font-mono border-1 border-pink-300/30 rounded-3xl shadow-md`}
    >
      <p>Schedule</p>
      <Task />
    </div>
  );
};

export const Task = (props) => {
  const {} = props;
  return (
    <div className="taskContainer flex gap-3 px-3 w-60 h-10 place-content-start items-center border-1 border-pink-200 rounded-sm text-[12px]">
      <p className="text-pink-100">08:00-09:30</p>
      <p className="text-pink-300">Go to school</p>
    </div>
  );
};
