// import Image from "next/image";
import { ShortsCards } from "../components/ShortsCard";
import { VideoCards } from "../components/VideosCard";
import { NavBar } from "../components/NavBar";
import { TagsBar } from "../components/TagsBar";
import { SideBar } from "../components/SideBar";
// use @

// default page to show
// return html
// use custom styles creating class

// component function
// function

const Home = () => {
  return (
    // FRAME
    <div className="*m-0 *:box-border relative flex flex-col bg-background w-full h-[100vh]">
      {/* NAV BAR SECTION */}
      <div className="top z-10 w-full h-28 fixed top-0 left-0 flex">
        <NavBar />
      </div>
      <div className="top z-10 w-full h-28 fixed top-14 left-18 flex">
        <TagsBar />
      </div>
      <div className="main flex">
        <div className="sideBar z-9 w-18 h-[100vh] fixed top-14 left-0 flex flex-col px-1">
          <SideBar />
        </div>
        <div className="contentss flex flex-col gap-10 m-6 ml-18 mt-28 overflow-y-scroll">
          <VideoCards />
          <ShortsCards />
          <VideoCards />
          <ShortsCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
