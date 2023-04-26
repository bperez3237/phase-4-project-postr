import React from "react";
import { useHistory } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Heading({ username }) {
  const history = useHistory();
  return (
    <div className="profile-heading">
      <div id="label">
        <BsArrowLeft onClick={() => history.goBack()} />
        <div className="heading-label">
          <h3>{username ? username : ""}</h3>
          <p>{"#"} Posts</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
