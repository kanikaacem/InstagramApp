import ShareFeed from "./ShareFeed";
import ConnectionFeed from "./ConnectionFeed";
//getting demo data
import { Posts } from "../DemoData";
import { useEffect, useState } from "react";
import axios from "axios";
function Feed() {
  const [UserPost, SetUserPost] = useState([]);
  //getting api data
  useEffect(() => {
    const PostFeeds = async () => {
      const res = await axios
        .post("http://localhost:3100/api/post/timeline", {
          userId: "6290a59f6ad628aa372f91fc",
        })
        .then(function (response) {
          return SetUserPost(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    PostFeeds();
  }, []);
  return (
    <div className="Feed">
      <div className="FeedWrapper">
        <ShareFeed />
        {UserPost.map((p) => {
          return <ConnectionFeed post={p} key={p._id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
//{Posts.map((p) => {
//  return <ConnectionFeed post={p} key={p.id} />;
//})}
