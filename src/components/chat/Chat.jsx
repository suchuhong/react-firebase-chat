import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    // console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>xxxxxxxxxxxxxxxxxxx zzzzzzzzxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="centor">
        <div className="message own">
          <div className="texts">
            <p>
              kkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjj
              kkkkkkkkkkkkkkkkkkkkkkkkkoo ooooooooooooooooooooooooooo
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              kkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjj
              kkkkkkkkkkkkkkkkkkkkkkkkkoo ooooooooooooooooooooooooooo
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              kkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjj
              kkkkkkkkkkkkkkkkkkkkkkkkkoo ooooooooooooooooooooooooooo
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              kkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjj
              kkkkkkkkkkkkkkkkkkkkkkkkkoo ooooooooooooooooooooooooooo
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./avatar.png" alt="" />
            <p>
              kkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjj
              kkkkkkkkkkkkkkkkkkkkkkkkkoo ooooooooooooooooooooooooooo
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  );
};

export default Chat;
