export const Input = (props) => {
  const { label, value, setValue } = props; 
  
  return (
    <div  className="flex flex-col gap-1">
      <label htmlFor="inputLabel" className="text-[12px] opacity-50 font-mono">{label}</label>
      <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} className="w-45 h-8 font-mono text-[12px] border-1 rounded-3xl p-3 focus:outline-pink-400 focus:outline-1 focus:border-0"/>
    </div>
  );
}