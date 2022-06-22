function CloseFriend({ user }) {
  return (
    <div className="FriendItem">
      <img src={user.ProfilePicture} className="FriendImage" alt="" />
      <span>{user.username}</span>
    </div>
  );
}

export default CloseFriend;
