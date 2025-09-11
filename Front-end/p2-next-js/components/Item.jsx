export const Item = (props) => {
  const { color } = props;
  
  return (
    <div
      className={`w-20 h-20 flex place-content-center items-center bg-${color}-500 text-black font-mono rounded-full`}>
    </div>
  );
};