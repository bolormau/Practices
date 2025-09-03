const videosInfo = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/dCLhUialKPQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCevfmBR-fsqbH30i12qnyf-0IQkQ",
    duration: "1:00:54",
    channelProfile:
      "https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj",
    title: "React JS 19 Full Course 2025 | Build an App and Master React ...",
    channelName: "Javascript Mastery",
    channelVerf: true,
    views: "963K views",
    uploadTime: "9 months ago",
  },
  {
    thumbnail: "",
    duration: "",
    channelProfile: "",
    title: "",
    channelName: "",
    channelVerf: true,
    views: "",
    uploadTime: "",
  },
  {
    thumbnail: "",
    duration: "",
    channelProfile: "",
    title: "",
    channelName: "",
    channelVerf: true,
    views: "",
    uploadTime: "",
  },
];

export const VideoCards = () => {
  // for(const videoInfo of videosInfo) {
  // }

  return (
    <div className="cards w-full flex gap-5 ">
      {/* render the cards by map */}
      
      <VideoCard thumbnail="https://i.ytimg.com/vi/0eHfgXHd2Tk/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBaQ9RHZ_rdvv-3ONsTfhoU0yOJew" 
                  duration="1:00:54"
                  channelProfile="https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj"
                  title="React JS 19 Full Course 2025 | Build an App and Master Rea ..."
                  channelName="Javascript Mastery"
                  channelVerf="true"
                  views="963K views"
                  uploadTime="9 months ago"
      />
      <VideoCard thumbnail="https://i.ytimg.com/vi/1K9ebQJosvo/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCIJ0a6xBRWzuV488COoKnPrPoyQ" 
                  duration="1:00:54"
                  channelProfile="https://yt3.ggpht.com/ytc/AIdro_mp0uj33BBfZ18_r1ZZxHHXMrfCvrVUzMmhe8tj7BAqlQ=s68-c-k-c0x00ffffff-no-rj"
                  title="2.3.3 Recurrence Relation [ T(n)= 2T(n/2) +n]  #3"
                  channelName="Abdul Bari"
                  channelVerf="true"
                  views="868K views"
                  uploadTime="7 years ago"
      />
      <VideoCard thumbnail="https://i.ytimg.com/vi/0eHfgXHd2Tk/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBaQ9RHZ_rdvv-3ONsTfhoU0yOJew" 
                  duration="1:00:54"
                  channelProfile="https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj"
                  title="React JS 19 Full Course 2025 | Build an App and Master React ..."
                  channelName="Javascript Mastery"
                  channelVerf="true"
                  views="963K views"
                  uploadTime="9 months ago"
      />
    </div>
  );
};

const VideoCard = ({thumbnail, duration, channelProfile, title, channelName, channelVerf, views, uploadTime}) => {
  return (
    <div className="frame bg-background min-w-89 h-75 flex-col">
      <div className="thumbnail w-full h-50 relative rounded-[12] mb-2 bg-cover bg-center " style={{backgroundImage: `url(${thumbnail})`}}>
        <p className="duration h-4  flex-shrink text-foreground text-[10px] font-bold absolute bottom-1 right-5 rounded-[3] flex content-center items-center px-1 py-0.25 bg-background bg-opacity">
          {duration}
        </p>
      </div>

      <div className="desc w-full flex gap-3">
        <div className="profile min-w-9 max-h-9 rounded-full bg-cover bg-center" style={ {backgroundImage: `url(${channelProfile})`} }></div>
        <div className="desc-text w-77 h-21 flex-col gap-0.5">
          <div className="titleNseeMore h-11 flex items-center place-content-between">
            <div className="title pr-6 text-[16px] leading-[19px] text-foreground font-bold">
              {title}
            </div>
            <svg
              className="seeMore w-9 h-9 p-2 bi bi-three-dots-vertical"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </div>
          <p className="channelName h-5 flex content-center items-center opacity-70 text-[14px] font-semi-bold">
            {channelName}
          </p>
          <div className="viewsNUpload h-5 flex opacity-70 text-[14px]">
            <p className="views font-medium">{views}</p>
            <p>・</p>
            <p className="upload font-medium">{uploadTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};




// {
//   /* VIDEO CARD 1 */
// }
// <div className="bg-background min-w-89 h-75 rounded-[15px] flex-col">
//   {/* card img */}
//   <div className="w-full h-50 relative rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/dCLhUialKPQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCevfmBR-fsqbH30i12qnyf-0IQkQ')] bg-cover bg-center">
//     {/* duration of video */}
//     <div className="w-11 h-[18px] text-[10px] font-bold absolute bottom-1 right-1 rounded-[3px] flex content-center items-center p-1 bg-background">
//       1:00:54
//     </div>
//   </div>

//   {/* card-desc */}
//   <div className="flex gap-3">
//     {/* Channel Profile */}
//     <div className="w-9 h-9 rounded-full bg-[url('https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj')] bg-cover bg-center bg-amber-100"></div>

//     {/* card desc text */}
//     <div className="h-21 flex-col gap-0.5">
//       {/* video title 7 see more icon */}
//       <div className="w-70 max-h-11 flex gap place-content-between">
//         {/* video title */}
//         <div className="w-60 text-sm text-foreground font-bold">
//           React JS 19 Full Course 2025 | Build an App and Master React ...
//         </div>
//         {/* see more icon */}
//         <svg
//           className="w-3 h-3 mt-2 bi bi-three-dots-vertical"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 16 16"
//         >
//           <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
//         </svg>
//       </div>

//       {/* video channel name */}
//       <p className="h-3 opacity-70 text-[0.6rem] font-semi-bold">
//         Javascript Mastery
//       </p>

//       {/* video views and date */}
//       <div className="h-3 flex opacity-70 text-[0.6rem] font-semi-bold">
//         <p className="">963K views</p>
//         <p>・</p>
//         <p className="">9 months ago</p>
//       </div>
//     </div>
//   </div>
// </div>;

// {
//   /* VIDEO CARD 1 */
// }
// <div className="bg-background min-w-89 h-75 rounded-[15px] flex-col">
//   {/* card img */}
//   <div className="w-full h-50 relative rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/dCLhUialKPQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCevfmBR-fsqbH30i12qnyf-0IQkQ')] bg-cover bg-center">
//     {/* duration of video */}
//     <div className="w-11 h-[18px] text-[10px] font-bold absolute bottom-1 right-1 rounded-[3px] flex content-center items-center p-1 bg-background">
//       1:00:54
//     </div>
//   </div>

//   {/* card-desc */}
//   <div className="flex gap-3">
//     {/* Channel Profile */}
//     <div className="w-9 h-9 rounded-full bg-[url('https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj')] bg-cover bg-center bg-amber-100"></div>

//     {/* card desc text */}
//     <div className="h-21 flex-col gap-0.5">
//       {/* video title 7 see more icon */}
//       <div className="w-70 max-h-11 flex gap place-content-between">
//         {/* video title */}
//         <div className="w-60 text-sm text-foreground font-bold">
//           React JS 19 Full Course 2025 | Build an App and Master React ...
//         </div>
//         {/* see more icon */}
//         <svg
//           className="w-3 h-3 mt-2"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           class="bi bi-three-dots-vertical"
//           viewBox="0 0 16 16"
//         >
//           <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
//         </svg>
//       </div>

//       {/* video channel name */}
//       <p className="h-3 opacity-70 text-[0.6rem] font-semi-bold">
//         Javascript Mastery
//       </p>

//       {/* video views and date */}
//       <div className="h-3 flex opacity-70 text-[0.6rem] font-semi-bold">
//         <p className="">963K views</p>
//         <p>・</p>
//         <p className="">9 months ago</p>
//       </div>
//     </div>
//   </div>
// </div>;
