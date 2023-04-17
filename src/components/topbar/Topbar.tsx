import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.scss";

const Topbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="topbar">
      <div className="left">
        <span className="logo">Ben-Social-Media</span>
      </div>
      <div className="center">
        <div className="searchBar">
          <SearchIcon
            className="searchIcon"
            onClick={() => {
              setSearch("");
            }}
          />
          <input
            type=""
            placeholder="Search for friends, post or video"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="right">
        <div className="links">
          <span className="link">Homepage</span>
          <span className="link">Timeline</span>
        </div>
        <div className="icons">
          <div className="icon">
            <PersonIcon />
            <span>1</span>
          </div>
          <div className="icon">
            <ChatIcon />
            <span>2</span>
          </div>
          <div className="icon">
            <NotificationsIcon />
            <span>1</span>
          </div>
        </div>
        <img src="/assets/ben.jpg" alt="" />
      </div>
    </div>
  );
};

export default Topbar;
