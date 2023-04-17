import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.scss";
import Feed from "../../components/feed/Feed";

const Profile = () => {
  return (
    <div className="profile">
      <Topbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="right">
          <div className="top">
            <div className="profileCover">
              <img className="profileCover" src="assets/post/3.jpeg" alt="" />
              <img className="profileImg" src="assets/ben.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4>Benro</h4>
              <p>A Fullstack Engineer</p>
            </div>
          </div>
          <div className="bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
