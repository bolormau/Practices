// 5-р дасгал (хялбаршуулсан): Жагсаалт үүсгэх timetable

// Нэг array төрлийн state үүсгэ (эхлээд хоосон array байж болно).
// Нэмэх гэсэн button байг.
// Input дээр бичсэн утгыг (string эсвэл number) state array-д нэмнэ.
// Array доторх бүх утгыг дэлгэц дээр жагсааж харуул.
// 💡 Зорилго: array төрлийн state ашиглаж update хийх (өөрөөр хэлбэл spread ашиглан шинэ array үүсгэх).

// SCHEDULER

"use client";

import { useState } from "react";
import { Input } from "../../components/Input";
import { DisplayTimetable } from "../../components/Display";

const Home = () => {
  const [state, setState] = useState();

  return (
    <div className="frame w-full h-[100vh] flex flex-col place-content-center items-center gap-10">
      <p className="text-pink-400 font-mono">Schedule</p>
      <div>
        <Input label={"task to do"}></Input>
        <Input label={"start-time"}></Input>
        <Input label={"finish-time"}></Input>
      </div>
      <DisplayTimetable />
    </div>
  );
};

export default Home;
