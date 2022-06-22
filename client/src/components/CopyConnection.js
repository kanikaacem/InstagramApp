import { MoreVert } from "@material-ui/icons";
import { Users } from "../DemoData";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

function ConnectionFeed({ post, userid }) {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setisliked] = useState(false);
  const [userName, setUserName] = useState({});
  const [userProfileImage, setuserProfileImage] = useState({});
  useEffect(() => {
    const FetchUser = async () => {
      const users = await axios
        .get(`http://localhost:3100/api/user/${post.userId}`)
        .then((response) => {
          setUserName(response.data.username || "Anonymous User");
          setuserProfileImage(
            response.data.profilePicture || "/assets/person/noavatar.png"
          );
        });
    };
    const PPUserData = async () => {
      const users = await axios
        .get(`http://localhost:3100/api/post/allposts/62909ecbbf45ba39465b2abd`)
        .then((response) => {
          setUserName(response.data.username || "Anonymous User");
          setuserProfileImage(
            response.data.profilePicture || "/assets/person/noavatar.png"
          );
        });
    };
    if (!userid) {
      FetchUser();
    } else {
      console.log("hello");
      PPUserData();
    }
  }, [post.userId]);
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setisliked(!isliked);
  };
  return (
    <div className="connectionFeedContainer">
      <div className="connectionFeedTop">
        <img className="connectionProfileImage" src={userProfileImage} alt="" />
        <span className="connectionName">Kanika</span>
        <span className="postTime">{format(post.createdAt, "en_US")}</span>
        <span className="moreView">
          <MoreVert> </MoreVert>
        </span>
      </div>
      <div className="connectionFeedDescription">{post?.desc}</div>
      <div className="connectionFeedCenter">
        <img className="connectionFeedImage" src={post.img} alt="" />
      </div>
      <div className="connectionFeedBottom">
        <img
          className="ShareIcon"
          onClick={likeHandler}
          src="/assets/like.png"
          alt=""
        ></img>
        <img
          className="HeartIcon"
          onClick={likeHandler}
          src="/assets/heart.png"
          alt=""
        ></img>
        <span className="peopleLikeCount"> {like} people liked it </span>
        <span className="peopleCommentCount"> {post.comment} comments</span>
      </div>
    </div>
  );
}

export default ConnectionFeed;
