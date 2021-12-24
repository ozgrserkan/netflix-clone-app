import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg "
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
