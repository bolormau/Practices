// 3-р дасгал: Хоёр өнгө солигдуулах

// Дэлгэц дээр нэг box (div) байг.
// 2 button (улаан, ногоон) хий.
// Дарсан товчоос хамааран box-ын background өнгө нь солигдоно.
// 💡 Зорилго: нэг state-аар class/style өөрчлөх.

"use client";

import { useState } from "react";
import { ButtonWColor, HomeButton } from "../../components/Button";
import { Item } from "../../components/Item";

const Home = () => {
  const [value, setValue] = useState();

  function change(newValue) {
    setValue(newValue);
  }

  return (
    <div className="frame w-full h-[100vh] flex flex-col place-content-center items-center gap-2">
      <div className="w-100 h-80 flex flex-col place-content-center items-center gap-1">
        <div className="w-60 h-15 flex place-content-center items-center gap-2">
          <ButtonWColor label="pink" clicked={() => change("pink")}></ButtonWColor>
          <ButtonWColor label="purple" clicked={() => change("purple")}></ButtonWColor>
        </div>
        <div
          className={`w-50 h-30 flex place-content-center items-center text-[14px] text-pink-100 font-mono border-1 border-pink-200`}
          style={{ borderColor: `${value}` }}
        >
          <Item color={value}></Item>
        </div>
      </div>
      <HomeButton label={"↩ Home"} link={"../"}></HomeButton>
    </div>
  );
};

export default Home;
