import "./CloseFriend.scss";

const CloseFriend: React.FC<{
  user: { id: number; profilePicture: string; username: string };
}> = ({ user }) => {
  return (
    <li>
      <img src={user.profilePicture} alt="" />
      <span>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
