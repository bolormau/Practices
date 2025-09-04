import { Balloon } from "../../componentsBC/Balloon";

const randomNumGen = (range) => {
  return Math.floor(Math.random() * range) + 10;
  // return `${pos}-${num}`; // top-18
};

const colors = ["pink", "blue", "green", "red", "yellow", "orange", "white"];

function randomColorGen() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function colorBar() {
  const color = randomColorGen();
  return `from-${color}-500 via-${color}-400 to-${color}-300`;
}

const topRange = 500;
const leftRange = 1000;

const Page = () => {
  return (
    <div className="frame *:m-0 *:box-border w-full h-[100vh] relative bg-cover bg-center">
      <Balloon
        top={randomNumGen(topRange)}
        left={randomNumGen(leftRange)}
        color={randomColorGen()}
      />
      <Balloon
        top={randomNumGen(topRange)}
        left={randomNumGen(leftRange)}
        color={randomColorGen()}
      />
      <Balloon
        top={randomNumGen(topRange)}
        left={randomNumGen(leftRange)}
        color={randomColorGen()}
      />
      <Balloon
        top={randomNumGen(topRange)}
        left={randomNumGen(leftRange)}
        color={randomColorGen()}
      />
      <Balloon
        top={randomNumGen(topRange)}
        left={randomNumGen(leftRange)}
        color={randomColorGen()}
      />

      {/* <Balloon top="top-50" left="left-30" color="white" /> */}
    </div>
  );
};

export default Page;

// const randomColorGen2 = () => {
//   // const num = Math.floor(Math.random() * 10) + 1;
//   const color = "";
//   while (color.length < 7) {
//     color += (Math.random()).toString(16).substring(-6).substring(-1);
//   }
//   return "#"+color;
// }

{
  /* {
  balloonsInfo.map((balloonInfo) => {
    return (
    <Balloon top={balloonInfo.pos.top} left={balloonInfo.pos.left} color={balloonInfo.color}/>
    );
  })
}
*/
}
