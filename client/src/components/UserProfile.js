import ConnectionFeed from "./ConnectionFeed";
//import { Posts } from "../DemoData";
import RightSidebar from "./RightSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
function UserProfile() {
  const [ProfilePost, setProfilePost] = useState([]);
  const [userInformation, SetuserInformation] = useState({});
  const [userId, setuserId] = useState();
  const username = useParams().username;
  //const username = "Kanika";
  useEffect(() => {
    const FetchUserInformation = async () => {
      const users = await axios
        .get(`http://localhost:3100/api/user?username=${username}`)
        .then((response) => {
          setuserId(response.data[0]._id);
          SetuserInformation(response.data[0]);
        });
    };
    FetchUserInformation();
  }, [username]);

  useEffect(() => {
    const ProfilePostfun = async () => {
      const users = await axios
        .get(`http://localhost:3100/api/post/allposts/${userId}`)
        .then((response) => {
          return setProfilePost(response.data);
        });
    };
    ProfilePostfun();
  }, [userId]);
  return (
    <>
      <div className="UserProfileDiv">
        <div className="UserProfiletop">
          <img
            src={userInformation.coverPicture || "/assets/nowallpaper.png"}
            className="profileBackgroundImage"
            alt=""
          ></img>
          <img
            src={
              userInformation.profilePicture || "/assets/person/noavatar.png"
            }
            className="profileUserImage"
            alt=""
          ></img>
        </div>
        <div className="UserProfileBottom">
          <div className="UserName">{userInformation.username} </div>
          <div className="UserEmail"> {userInformation.email}</div>
          <div className="ProfileDescription">
            {" "}
            {userInformation.desc || "Hello Frnds ! this is description "}
          </div>
        </div>

        <div className="UserProfileContent">
          <div className="ProfileFeed">
            {ProfilePost.length !== 0 ? (
              ProfilePost.map((p) => {
                return <ConnectionFeed post={p} key={p._id} />;
              })
            ) : (
              <h3 id="noPostavailable"> No Posts Present</h3>
            )}
          </div>
          <RightSidebar
            profile="profile"
            userInformation={userInformation}
          ></RightSidebar>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
//{Posts.map((p) => {
//return <ConnectionFeed userid="kanika" post={p} key={p.id} />;
//})}
