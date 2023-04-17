import Online from "../online/Online";
import { Users } from "../../dummyData";
import "./Rightbar.scss";

const Rightbar: React.FC<any> = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday">
          <img src="assets/gift.png" alt="" />
          <span>
            <b>Guy</b> and <b>Adam</b> celebrate their birthday today. Wish them
            a happy birthday!
          </span>
        </div>
        <img className="ad" src="/assets/ad.png" alt="" />
        <h4>Online Friends</h4>
        <ul>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="title">User Information</h4>
        <div className="info">
          <div className="infoItem">
            <span className="key">City:</span>
            <span className="value">New York</span>
          </div>
          <div className="infoItem">
            <span className="key">From:</span>
            <span className="value">USA</span>
          </div>
          <div className="infoItem">
            <span className="key">Relationship:</span>
            <span className="value">Single</span>
          </div>
        </div>
        <h4 className="friends">User friends</h4>
        <div className="followings">
          <div className="follow">
            <img src="assets/person/1.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
          <div className="follow">
            <img src="assets/person/2.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
          <div className="follow">
            <img src="assets/person/3.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
          <div className="follow">
            <img src="assets/person/4.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
          <div className="follow">
            <img src="assets/person/5.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
          <div className="follow">
            <img src="assets/person/6.jpeg" alt="" />
            <span>Peter Parker</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
