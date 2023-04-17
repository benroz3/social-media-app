import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import "./Post.scss";

const Post: React.FC<{
  post:
    | {
        id: number;
        desc: string;
        photo: string;
        date: string;
        userId: number;
        like: number;
        comment: number;
      }
    | {
        id: number;
        desc?: undefined;
        photo: string;
        date: string;
        userId: number;
        like: number;
        comment: number;
      };
}> = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="top">
          <div className="left">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="name">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="time">{post.date}</span>
          </div>
          <div className="right">
            <MoreVertIcon className="icon" />
          </div>
        </div>
        <div className="center">
          <span>{post?.desc}</span>
          <img src={post.photo} alt="" />
        </div>
        <div className="bottom">
          <div className="left">
            <img src="assets/like.png" onClick={likeHandler} alt="" />
            <img src="assets/heart.png" onClick={likeHandler} alt="" />
            <span>{like} people like it</span>
          </div>
          <div className="right">
            <span>{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
