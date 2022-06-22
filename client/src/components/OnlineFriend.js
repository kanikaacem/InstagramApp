function OnlineFriend({ user }) {
  return (
    <>
      <div className="onlineFriend">
        <div className="ImageDiv">
          <img src={user.ProfilePicture} className="FriendImage" alt=""></img>
          <span className="FriendAvailibilty"></span>
        </div>
        <span>{user.username}</span>
      </div>
    </>
  );
}

export default OnlineFriend;
