export const NavBar = () => {
  return (
    <div className="container *:items-center w-full h-14 flex pl-[1rem] pr-[1rem] bg-amber-100">
      <div className="menuAndYtLogo flex w-14 ">
        <div className="menuIcon w-10 h-full bg-green-300">svg</div>
        <div className="ytLogo">svg</div>
      </div>
      <div>
        <div className="searchBar ">
          <div className="searchInput"></div>
          <div className="searchIcon"></div>
        </div>
        <div className="voiceSearchButton "></div>
      </div>
      <div className="account ">
        <div className="createButton "></div>
        <div className="notifBell "></div>
        <div className="accProfile "></div>
      </div>
    </div>
  );
};
