import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import "../main/Ma"
import "../main/Ma"

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const [prev,setprev]=useState(true);

  return (
<div className="sidebar" data-theme="dark">
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={assets.menu_icon}
        />
<div className="new-chat">
<img src={assets.plus_icon}  alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <div className="col">
<p className="para">{question}</p>
              </div>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <div className="col">
                <p className="para">Show me beautiful...</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
