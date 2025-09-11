// 1-р дасгал: Хувийн мэдээлэл харуулах

// 3 button (нэр, нас, хүйс) байг.
// Аль товчлуур дээр дарна, тэр утгыг (өөрийн мэдээллээ оруулж болно) дэлгэц дээр харуулна.
// 💡 Зорилго: нэг state ашиглаж утга өөрчлөх.

"use client";

import { useState } from "react";
import { Button } from "../../_components/Button";

const Home = () => {
  const [value, setValue] = useState("");

  function change(newvalue) {
    setValue(newvalue);
  }

  return (
    <div className="frame w-full h-[100vh] flex flex-col place-content-center items-center gap-2">
      <div className="w-100 h-15 flex place-content-center items-center gap-2">
        <Button clicked={() => change("Hi, I'm Alice!")} label="Name" info="Alice"></Button>
        <Button clicked={() => change("I'm 20 years old.")} label="Age" info="20"></Button>
        <Button clicked={() => change("I'm girl.")} label="Gender" info="female"></Button>
      </div>
      <div className="w-80 h-30 flex place-content-center items-center text-[14px] text-pink-100 font-mono border-1 border-pink-300">
        {value}
      </div>
    </div>
  );
};

export default Home;
