import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/style.css";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import SettingsSidebar from "./SettingsSidebar";
import Account from "./Account";
import Notifications from "./Notifications";
// import uploadImage from "./utils/uploadUtils";

function Settings({ login, setLogin }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const uploadBanner = async (e) => {
    e.preventDefault();
    if (!file) return;
    const imageRef = ref(storage, `images/${file.name}${v4()}`);
    const snapshot = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    try {
      const response = await fetch(`/users/${login.user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ banner: url }),
      });
      if (response.ok) {
        const data = await response.json();
        setLogin((prevLogin) => ({ ...prevLogin, user: data }));
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!file) return;
    const imageRef = ref(storage, `images/${file.name}${v4()}`);
    const snapshot = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    try {
      const response = await fetch(`/users/${login.user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: url }),
      });
      if (response.ok) {
        const data = await response.json();
        setLogin((prevLogin) => ({ ...prevLogin, user: data }));
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <SettingsSidebar />
      <div className="content">
        <Switch>
          <Route path="/settings/account">
            <Account
              title={title}
              setTitle={setTitle}
              file={file}
              setFile={setFile}
              uploadImage={uploadImage}
              uploadBanner={uploadBanner}
            />
          </Route>
          <Route path="/settings/notifications">
            <Notifications />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Settings;
