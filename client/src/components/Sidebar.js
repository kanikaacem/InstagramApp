import {
  RssFeed,
  Chat,
  PersonalVideo,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
} from "@material-ui/icons";
import { Users } from "../DemoData";
import CloseFriend from "./CloseFriend";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarWrapper">
        <div className="SidebarItem">
          <a className="SidebarMenuItem" href="/feed">
            <RssFeed className="SidebarItemIcon"></RssFeed>
            <span className="SidebarItemText">Feed</span>
          </a>
        </div>
        <div className="SidebarItem">
          <Chat className="SidebarItemIcon"></Chat>
          <span className="SidebarItemText">Chats</span>
        </div>
        <div className="SidebarItem">
          <PersonalVideo className="SidebarItemIcon"></PersonalVideo>
          <span className="SidebarItemText">Videos</span>
        </div>
        <div className="SidebarItem">
          <Group className="SidebarItemIcon"></Group>
          <span className="SidebarItemText">Groups</span>
        </div>
        <div className="SidebarItem">
          <Bookmark className="SidebarItemIcon"></Bookmark>
          <span className="SidebarItemText">Bookmarks</span>
        </div>

        <div className="SidebarItem">
          <HelpOutline className="SidebarItemIcon"></HelpOutline>
          <span className="SidebarItemText">Questions</span>
        </div>
        <div className="SidebarItem">
          <WorkOutline className="SidebarItemIcon"></WorkOutline>
          <span className="SidebarItemText">Jobs</span>
        </div>
        <div className="SidebarItem">
          <Event className="SidebarItemIcon"></Event>
          <span className="SidebarItemText">Events</span>
        </div>

        <button className="showMore">Show More</button>
        <hr className="sidebarSeperator" />

        {Users.map((user) => (
          <CloseFriend user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

//padding to sidebar will increase its width but padding to SidebarWrapper willn't increase its width
