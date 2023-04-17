import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";
import GradingIcon from "@mui/icons-material/Grading";
import ForumIcon from "@mui/icons-material/Forum";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import "./Leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarContainer">
        <ul>
          <li>
            <GradingIcon className="icon" />
            <span>Feed</span>
          </li>
          <li>
            <ForumIcon className="icon" />
            <span>Chats</span>
          </li>
          <li>
            <OndemandVideoIcon className="icon" />
            <span>Videos</span>
          </li>
          <li>
            <GroupsIcon className="icon" />
            <span>Groups</span>
          </li>
          <li>
            <BookmarkIcon className="icon" />
            <span>Bookmarks</span>
          </li>
          <li>
            <NotListedLocationIcon className="icon" />
            <span>Questions</span>
          </li>
          <li>
            <WorkIcon className="icon" />
            <span>Jobs</span>
          </li>
          <li>
            <EventIcon className="icon" />
            <span>Events</span>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <span>Courses</span>
          </li>
        </ul>
        <button>Show More</button>
        <hr />
        <ul className="friendsList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
