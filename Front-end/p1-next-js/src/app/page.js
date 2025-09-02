// import Image from "next/image";
import { ShortsCards } from "../../components/ShortsCard";
import { VideoCards } from "../../components/VideosCard";
import { NavBar } from "../../components/NavBar";

// default page to show
// return html
// use custom styles creating class

// component function
// function


const Home = () => {
  return (
    // FRAME
    <div className="*:m-0 *:box-border bg-background w-307 h-[100vh] p-3 flex-col ">
      {/* NAV BAR SECTION */}
      <NavBar />

      {/* VIDEOS SECTION */}
      <VideoCards />

      {/* SHORTS SECTION */}
      <ShortsCards />
    </div>
  );
};

export default Home;
