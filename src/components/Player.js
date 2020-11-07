import React from "react";
import "../styles/Player.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
function Player({}) {
  return (
    <div className="player">
      <div className="player-time-control">
        <p>0:00</p>
        <input type="range" />
        <p>3:00</p>
      </div>
      <div className="player-icons-controls">
        <SkipPreviousIcon />
        <PlayCircleFilledIcon fontSize="large" />
        <SkipNextIcon />
      </div>
    </div>
  );
}

export default Player;
