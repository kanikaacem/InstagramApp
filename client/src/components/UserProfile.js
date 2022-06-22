import ConnectionFeed from "./ConnectionFeed";
//import { Posts } from "../DemoData";
import RightSidebar from "./RightSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
function UserProfile() {
  const [ProfilePost, setProfilePost] = useState([]);
  useEffect(() => {
    const ProfilePostfun = async () => {
      const users = await axios
        .get(`http://localhost:3100/api/post/allposts/6290a59f6ad628aa372f91fc`)
        .then((response) => {
          return setProfilePost(response.data);
        });
    };
    ProfilePostfun();
  }, []);
  return (
    <>
      <div className="UserProfileDiv">
        <div className="UserProfiletop">
          <img
            src="/assets/post/3.jpeg"
            className="profileBackgroundImage"
            alt=""
          ></img>
          <img
            src="/assets/person/1.jpeg"
            className="profileUserImage"
            alt=""
          ></img>
        </div>
        <div className="UserProfileBottom">
          <div className="UserName"> User Name</div>
          <div className="ProfileDescription"> Hello ! , my friends .</div>
        </div>

        <div className="UserProfileContent">
          <div className="ProfileFeed">
            {ProfilePost.map((p) => {
              return <ConnectionFeed post={p} key={p._id} />;
            })}
          </div>
          <RightSidebar profile="profile"></RightSidebar>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
//{Posts.map((p) => {
//return <ConnectionFeed userid="kanika" post={p} key={p.id} />;
//})}
