import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import RightSidebar from "./RightSidebar";

function ProfilePage() {
  return (
    <>
      <div className="mainDiv">
        <div className="mainContainer">
          <Sidebar></Sidebar>
          <UserProfile></UserProfile>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
