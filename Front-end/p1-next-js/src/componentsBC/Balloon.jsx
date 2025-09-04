export const Balloon = ({ top, left, color }) => {
  return (
    <div
      className={`balloon absolute  w-20 h-29`}
      style={{
        animation: "bounce3 3s ease-in-out infinite",
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <div className="w-20 relative flex justify-center items-center">
        <div
          style={{ background: `linear-gradient(to top, ${color}, ${color})` }}
          className={`relative w-20 h-21 rounded-full  shadow-xl`}
        >
          <div className="absolute top-4 left-3 w-7 h-9 rounded-full bg-white/90 blur-sm"></div>
        </div>
        <div
          style={{ backgroundColor: color }}
          className={`absolute bottom-[-5px] w-2 h-2 rotate-45 rounded-b-xs`}
        ></div>
        <div className="absolute bottom-[-42px] w-[1px] h-10 bg-gray-600"></div>
      </div>
    </div>
  );
};

// style={{ background: `linear-gradient(to top, ${color.start}, ${color.middle}, ${color.end})` }}>
