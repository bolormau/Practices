import Image from "next/image";
import Link from "next/link";
import { ButtonWithLink } from "../components/Button";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col place-content-center items-center gap-5">
      <p className="text-[16px] font-mono text-center text-pink-200">
        Jump to practices <br />
        through the buttons!
      </p>
      <div className="flex flex-col place-content-center items-center gap-2">
        <ButtonWithLink label={"1. Buttons with display"} link={"/p1"}></ButtonWithLink>
        <ButtonWithLink label={"2. Adder & Subtractor"} link={"/p2"}></ButtonWithLink>
        <ButtonWithLink label={"3. Color changer"} link={"/p3"}></ButtonWithLink>
        <ButtonWithLink label={"4. Log-in"} link={"/p4"}></ButtonWithLink>
        <ButtonWithLink label={"5. Finished yet! "} link={"/p5"}></ButtonWithLink>
      </div>
    </div>
  );
}
