// 3-р дасгал: Хоёр өнгө солигдуулах

// Дэлгэц дээр нэг box (div) байг.
// 2 button (улаан, ногоон) хий.
// Дарсан товчоос хамааран box-ын background өнгө нь солигдоно.
// 💡 Зорилго: нэг state-аар class/style өөрчлөх.

'use client'

import { useState } from 'react';
import { Button } from "../../_components/Button";

const Home = () => {
  const [value, setValue] = useState();

  function change(newValue) {
    setValue(newValue);
  }

  return (
    <div className='frame w-full h-[100vh] flex flex-col place-content-center items-center gap-2'>
      <div className="w-100 h-15 flex place-content-center items-center gap-2">
        <Button label={"pink"}  ></Button>
        <Button label={"blue"}  ></Button>
      </div>
      <div className="w-50 h-30 flex place-content-center items-center text-[14px] text-pink-100 font-mono border-1 border-pink-300">
        {value}
      </div>
    </div>
  );
};

export default Home;