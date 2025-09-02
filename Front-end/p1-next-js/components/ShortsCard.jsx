export const ShortsCards = () => {
  return (
    <div>
      {/* Shorts Header */}
      <div className="w-full h-10 flex gap-1">
        {/* shorts icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
          // style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
          className="w-6 h-6"
        >
          <path
            d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
            fill="#f03"
          ></path>
          <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
        </svg>
        {/* shorts-text */}
        <div className="font-bold">Shorts</div>
      </div>

      {/* SHORTS CARDS */}
      <div className="cards w-full flex gap-5">
        {/* EACH CARD 1 */}
        <div className="bg-background w-63.5 h-114 rounded-[15px] gap-50 flex-col">
          {/* card img */}
          <div className="w-full h-100 rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/R-8Lmw6Q0Fk/oar2.jpg?sqp=-o…hgGOAFAAQ==&rs=AOn4CLC647wv78J4RtbO9xsbH85IAPFefg')] bg-cover bg-center" />
          {/* card-desc */}
          <div className="flex place-content-between mr-5">
            {/* card desc text */}
            <div className="h-10">
              <div className="h-max-11 w-55 text-sm text-foreground font-bold">
                4 month adulting update wooo
              </div>
              <p className="h-3 opacity-50 text-[0.6rem] font-semi-bold">
                963K views
              </p>
            </div>
            {/* card see more icon */}
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
        </div>

        {/* EACH CARD 2 */}
        <div className="bg-background w-63.5 h-114 rounded-[15px] gap-50 flex-col">
          {/* card img */}
          <div className="w-full h-100 rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/jZGWOUNeiFY/oar2.jpg?sqp=-o…hgGOAFAAQ==&rs=AOn4CLBQrXgjUhiz79_LcpI2tVfpJk9Sqw')] bg-cover bg-center" />
          {/* card-desc */}
          <div className="flex place-content-between mr-5">
            {/* card desc text */}
            <div className="h-10">
              <div className="h-max-11 w-55 text-sm text-foreground font-bold">
                Data Engineer vs. Data Scientist ft. @eczachly_
              </div>
              <p className="h-3 opacity-50 text-[0.6rem] font-semi-bold">
                29K views
              </p>
            </div>
            {/* card see more icon */}
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
        </div>

        {/* EACH CARD 3 */}
        <div className="bg-background w-63.5 h-114 rounded-[15px] gap-50 flex-col">
          {/* card img */}
          <div className="w-full h-100 rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/cKmIHxHKJFQ/oardefault.jpg?…hgGOAFAAQ==&rs=AOn4CLAvNYze0RRIOKZ3-kHXsl1FXhHbRg')] bg-cover bg-center" />
          {/* card-desc */}
          <div className="flex place-content-between mr-5">
            {/* card desc text */}
            <div className="h-10">
              <div className="h-max-11 w-55 text-sm text-foreground font-bold">
                can you solve this faster than a CS teacher? #computerscience
              </div>
              <p className="h-3 opacity-50 text-[0.6rem] font-semi-bold">
                5.3M views
              </p>
            </div>
            {/* card see more icon */}
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
        </div>

        {/* EACH CARD 4 */}
        <div className="bg-background w-63.5 h-114 rounded-[15px] gap-50 flex-col">
          {/* card img */}
          <div className="w-full h-100 rounded-[15px] mb-2 bg-[url('https://i.ytimg.com/vi/v5ejrNkoai4/oar2.jpg?sqp=-o…hgGOAFAAQ==&rs=AOn4CLDVNC24-3VPfrVkEe5T9qeofsXc1Q')] bg-cover bg-center" />
          {/* card-desc */}
          <div className="flex place-content-between mr-5">
            {/* card desc text */}
            <div className="h-10 flex-col gap-5">
              <div className="h-max-11 w-55 text-sm text-foreground font-bold">
                You NEED To Do Project Based Learning…
              </div>
              <p className="h-3 opacity-50 text-[0.6rem] font-semi-bold">
                64K views
              </p>
            </div>
            {/* card see more icon */}
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
        </div>
      </div>
    </div>
  );
};
