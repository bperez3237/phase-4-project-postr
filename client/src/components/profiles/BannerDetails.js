import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineLink } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { useHistory } from "react-router-dom";

function BannerDetails({ user }) {
  const history = useHistory();
  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "solid 2px #eff6f4",
  };

  console.log(user);

  return (
    <div className="banner-details">
      <div className="user-profile-pic">
        <img id="user-pro-pic" src={user.avatar} alt="user profile" />
      </div>
      <div>
        <button
          className="round-button"
          id="edit-profile-button"
          style={buttonStyle}
          onClick={() => history.push("/settings/account")}
        >
          Edit Profile
        </button>
      </div>
      <div className="names">
        <h4>{user.name}</h4>
        <p>@{user.username}</p>
      </div>
      <div className="bio">
        <p>user.bio here</p>
      </div>
      <div className="links">
        <SlLocationPin /> brooklyn, ny <span> </span>
        <AiOutlineLink /> links.com <span> </span>
        <BiCalendar /> Joined on
      </div>
      <div className="connections"># Following # Followers</div>
    </div>
  );
}

export default BannerDetails;
