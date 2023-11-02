import "./sidebar.css";
import Logo from "../../assets/images/logo.png";
import Chatbot from "../../assets/images/Chatbot.png";
import Logout from "../../assets/images/Logout.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/authContext";

function Sidebar({ flow }) {
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();

  const { signOutUser } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="maincontainer">
      <div>
        <img className="side_logo" alt="" src={Logo} />
      </div>
      <div className="menu_section">
        {flow.map((item, index) => {
          return (
            <NavLink
              to={item?.path}
              className={select === index ? "active_menu_con" : "menu_con"}
              key={index}
              onClick={() => setSelect(index)}
            >
              <img
                className={select === index ? "active_menu_logo" : "menu_logo"}
                alt=""
                src={item?.icon}
              />

              <span
                className={select === index ? "active_item_txt" : "item_txt"}
              >
                {item?.heading}
              </span>
            </NavLink>
          );
        })}
      </div>
      <div className="chatbot_con">
        <img className="chatbot_icon" alt="" src={Chatbot} />
        <h2 className="talk">Talk to AI chatbot</h2>
        <span className="ask">
          Ask for any query and it will be answered in a second
        </span>
        <button className="button">Chat now</button>
      </div>
      <div
        className={select === 7 ? "active_menu_con" : "menu_con"}
        onClick={() => setSelect(7)}
      >
        <img className="menu_logo" alt="" src={Logout} />
        <span onClick={handleSignOut} className={select === 7 ? "active_item_txt" : "item_txt"}>
          Logout
        </span>
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  flow: [],
};

export default Sidebar;