import "./Online.scss";

const Online: React.FC<{
  user: { id: number; profilePicture: string; username: string };
}> = ({ user }) => {
  return (
    <li>
      <div className="wrapper">
        <img src={user.profilePicture} alt="" />
        <span className="online"></span>
      </div>
      <span className="username">{user.username}</span>
    </li>
  );
};

export default Online;
