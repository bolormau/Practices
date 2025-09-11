// 4-р дасгал: Оюутны мэдээлэл

// Хоёр state үүсгэ: studentName, studentAge.
// Input талбаруудаар нэр болон насыг оруулах боломжтой байг.
// Тэрийг button дарахад дэлгэц дээр "Сурагчийн нэр: ___ , Нас: ___" гэж гарга.
// 💡 Зорилго: олон state ашиглаж input-оос утга авах.

// When buttons pressed states will be emptied.
// if log-in button pressed log-in sectin should appear.

"use client";

import { useState } from "react";
import { LoginButton, HomeButton } from "../../components/Button";
import { Display } from "../../components/Display";
import { Input } from "../../components/Input";

const Home = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [userInfo, setUserInfo] = useState({ name: "", pwd: "", show: "hidden" });

  return (
    <div className="frame w-full h-[100vh] flex flex-col place-content-center items-center gap-2">
      <div className="w-100 h-200 flex flex-col place-content-center items-center gap-10">
        <div className="w-full h-80 flex flex-col place-content-center items-center gap-5">
          <p className="text-pink-400 font-mono">Welcome again!</p>
          <div className="flex flex-col gap-2">
            <Input
              label={"username: "}
              value={username}
              setValue={setUsername}
            ></Input>
            <Input
              label={"password: "}
              value={password}
              setValue={setPassword}
            ></Input>
          </div>
          <div className="w-60 h-15 flex place-content-center items-center gap-2">
            <LoginButton
              label="log-in"
              setUserInfo={(username, password) => {
                setUserInfo({ name: username, pwd: password, show: "flex" });
              }}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            ></LoginButton>
          </div>
        </div>
        <div className={`w-80 h-20 flex content-center items-center`}>
          <Display
            name={userInfo.name}
            pwd={userInfo.pwd}
            show={userInfo.show}
          ></Display>
        </div>
      </div>
      <HomeButton label={"↩ Home"} link={"../"}></HomeButton>
    </div>
  );
};

export default Home;
