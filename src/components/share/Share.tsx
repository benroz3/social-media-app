import { useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Share.scss";

const Share = () => {
  const [share, setShare] = useState("");

  return (
    <div className="share">
      <div className="shareContainer">
        <div className="top">
          <img src="/assets/ben.jpg" alt="" />
          <input
            placeholder="What's in your mind?"
            value={share}
            onChange={(event) => {
              setShare(event.target.value);
            }}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="options">
            <div className="option">
              <PermMediaIcon htmlColor="tomato" className="icon" />
              <span>Photo or Video</span>
            </div>
            <div className="option">
              <LabelIcon htmlColor="blue" className="icon" />
              <span>Tag</span>
            </div>
            <div className="option">
              <LocationOnIcon htmlColor="goldenrod" className="icon" />
              <span>Location</span>
            </div>
            <div className="option">
              <SentimentSatisfiedAltIcon htmlColor="green" className="icon" />
              <span>Feelings</span>
            </div>
          </div>
          <button
            onClick={() => {
              setShare("");
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
