// 2-р дасгал: Тоолуур нэмэх, хасах

// Нэг тоолуурын state үүсгэ.
// +1 болон -1 гэсэн хоёр button байг.
// Тухайн тоолуурын утгыг дэлгэц дээр харуулж, дарсан тохиолдолд нэмэгдэж/хорогдох ёстой.
// 💡 Зорилго: тоон state удирдах.

'use client'

import { useState } from 'react';
import { Button } from "../../_components/Button"

const Home = () => {
  let [value, setValue] = useState(0);

  function change(newValue) {
    if(newValue == "+") setValue(value++);
    else if(newValue == "-") setValue(value--);
  }

  return (
    <div className='frame w-full h-[100vh] flex flex-col place-content-center items-center gap-2'>
      <div className="w-100 h-15 flex place-content-center items-center gap-2">
        <Button clicked={() => change("-")} label="-1"></Button>
        <Button clicked={() => change("+")} label="+1"></Button>
      </div>
      <div className="w-50 h-30 flex place-content-center items-center text-[14px] text-pink-100 font-mono border-1 border-pink-300">
        {value}
      </div>
    </div>
  );
};

export default Home;