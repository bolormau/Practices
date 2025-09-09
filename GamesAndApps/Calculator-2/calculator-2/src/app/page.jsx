import Image from "next/image";
import { Display } from "../components/Display";
// import { Button } from "@components/Button";
import { Keypad } from "../components/Keypad";

export default function Home() {
  return (
    <div className="frame w-full h-[100vh] flex place-content-center items-center">
      <div className="container w-91 h-90 flex flex-col content-center items-center gap-2 ">
        <Display equation="" result="" />
        <Keypad />
      </div>
    </div>
  );
}
