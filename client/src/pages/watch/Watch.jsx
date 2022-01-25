import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        width={1000}
        src={movie.video}
      />
    </div>
  );
};

export default Watch;
