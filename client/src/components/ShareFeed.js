import {
  InsertPhoto,
  Style,
  AddLocation,
  EmojiEmotions,
} from "@material-ui/icons";
function ShareFeed() {
  return (
    <div className="ShareFeed">
      <div className="ShareTop">
        <img
          src="/assets/person/1.jpeg"
          className="ShareProfileImg"
          alt=""
        ></img>
        <span className="ShareTopInput">
          <input placeholder="What's in your mind ?" />
        </span>
      </div>
      <hr className="Sharehr"></hr>
      <div className="ShareBottom">
        <div className="ShareButtonItems">
          <InsertPhoto className="insertPhoto" />
          <span className="ShareButtonText"> Photos or Videos</span>
        </div>
        <div className="ShareButtonItems">
          <Style className="style" />
          <span className="ShareButtonText"> Tags</span>
        </div>
        <div className="ShareButtonItems">
          <AddLocation className="addLocation" />
          <span className="ShareButtonText"> Location</span>
        </div>
        <div className="ShareButtonItems">
          <EmojiEmotions className="emotion" />
          <span className="ShareButtonText"> Feelings</span>
        </div>
        <button className="ShareButton">Share</button>
      </div>
    </div>
  );
}
export default ShareFeed;
