export const VideoCards = () => {
  return (
    <div className="cards w-full flex gap-5 ">
      {/* VIDEO CARD 1 */}
      <div className="bg-background min-w-89 h-75 flex-col">
        {/* card img */}
        <div className="w-full h-50 relative rounded-[12] mb-2 bg-[url('https://i.ytimg.com/vi/0eHfgXHd2Tk/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBaQ9RHZ_rdvv-3ONsTfhoU0yOJew')] bg-cover bg-center ">
          {/* duration of video */}
          <p className="h-4 flex-shrink text-[10px] font-bold absolute bottom-1 right-5 rounded-[3] flex content-center items-center px-1 py-0.25 bg-background bg-opacity">
            1:00:54
          </p>
        </div>

        {/* card-desc */}
        <div className="flex gap-3">
          {/* Channel Profile */}
          <div className="w-9 h-9 rounded-full bg-[url('https://yt3.googleusercontent.com/ytc/AIdro_mamrztXZqZmBmTAL8rzsT4pWEYa-fktAb83AjkUfWpehOPFLb2TzVWL2ITuPij5KvSkQ=s160-c-k-c0x00ffffff-no-rj')] bg-cover bg-center bg-amber-100"></div>

          {/* card desc text */}
          <div className="h-21 flex-col gap-0.5">
            {/* video title & see more icon */}
            <div className="w-77 max-h-11 flex gap place-content-between">
              {/* video title */}
              <div className="w-77 pr-6 text-sm text-foreground font-bold">
                React JS 19 Full Course 2025 | Build an App and Master React ...
              </div>
              {/* see more icon */}
              <svg
                className="w-3 h-3 mt-2 bi bi-three-dots-vertical"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>

            {/* video channel name */}
            <p className="h-5 flex content-center items-center opacity-70 text-2 font-semi-bold">
              Javascript Mastery
            </p>

            {/* video views and date */}
            <div className="h-5 flex opacity-70 text-2 font-semi-bold">
              <p className="">963K views</p>
              <p>・</p>
              <p className="">9 months ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO CARD 1 */}
      <div className="bg-background min-w-89 h-75 rounded-[15px] flex-col">
        {/* card img */}
        <div className="w-full h-50 relative rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/dCLhUialKPQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCevfmBR-fsqbH30i12qnyf-0IQkQ')] bg-cover bg-center">
          {/* duration of video */}
          <div className="w-11 h-[18px] text-[10px] font-bold absolute bottom-1 right-1 rounded-[3px] flex content-center items-center p-1 bg-background">
            1:00:54
          </div>
        </div>

        {/* card-desc */}
        <div className="flex gap-3">
          {/* Channel Profile */}
          <div className="w-9 h-9 rounded-full bg-[url('https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj')] bg-cover bg-center bg-amber-100"></div>

          {/* card desc text */}
          <div className="h-21 flex-col gap-0.5">
            {/* video title 7 see more icon */}
            <div className="w-70 max-h-11 flex gap place-content-between">
              {/* video title */}
              <div className="w-60 text-sm text-foreground font-bold">
                React JS 19 Full Course 2025 | Build an App and Master React ...
              </div>
              {/* see more icon */}
              <svg
                className="w-3 h-3 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>

            {/* video channel name */}
            <p className="h-3 opacity-70 text-[0.6rem] font-semi-bold">
              Javascript Mastery
            </p>

            {/* video views and date */}
            <div className="h-3 flex opacity-70 text-[0.6rem] font-semi-bold">
              <p className="">963K views</p>
              <p>・</p>
              <p className="">9 months ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO CARD 1 */}
      <div className="bg-background min-w-89 h-75 rounded-[15px] flex-col">
        {/* card img */}
        <div className="w-full h-50 relative rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/dCLhUialKPQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCevfmBR-fsqbH30i12qnyf-0IQkQ')] bg-cover bg-center">
          {/* duration of video */}
          <div className="w-11 h-[18px] text-[10px] font-bold absolute bottom-1 right-1 rounded-[3px] flex content-center items-center p-1 bg-background">
            1:00:54
          </div>
        </div>

        {/* card-desc */}
        <div className="flex gap-3">
          {/* Channel Profile */}
          <div className="w-9 h-9 rounded-full bg-[url('https://yt3.googleusercontent.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s160-c-k-c0x00ffffff-no-rj')] bg-cover bg-center bg-amber-100"></div>

          {/* card desc text */}
          <div className="h-21 flex-col gap-0.5">
            {/* video title 7 see more icon */}
            <div className="w-70 max-h-11 flex gap place-content-between">
              {/* video title */}
              <div className="w-60 text-sm text-foreground font-bold">
                React JS 19 Full Course 2025 | Build an App and Master React ...
              </div>
              {/* see more icon */}
              <svg
                className="w-3 h-3 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>

            {/* video channel name */}
            <p className="h-3 opacity-70 text-[0.6rem] font-semi-bold">
              Javascript Mastery
            </p>

            {/* video views and date */}
            <div className="h-3 flex opacity-70 text-[0.6rem] font-semi-bold">
              <p className="">963K views</p>
              <p>・</p>
              <p className="">9 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
