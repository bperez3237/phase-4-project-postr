import React, { useState } from "react";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import ErrorMessage from "../errors/ErrorMessage";

function SignUpForm({
  setLoginState,
  loginState,
  handleChange,
  optionElements,
  allLocations,
  selectedLocation,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  getDownloadURL(
    ref(storage, `images/default_image/twitter-avi-gender-balanced-figure.png`)
  )
    .then((url) => setAvatarUrl(url))
    .catch((error) => console.log(error));

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(null);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        name: name,
        avatar: avatarUrl,
        location_id: selectedLocation.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((login) => {
          setLoginState(login);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {errors ? <ErrorMessage errors={errors} setErrors={setErrors} /> : null}
      <div>
        <label>Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          placeholder="Confirm Password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-4">
        <label>Location</label>
        <select value={loginState.location?.id} onChange={handleChange}>
          {allLocations ? optionElements : <></>}
        </select>
      </div>

      <button style={{ width: "100%" }} className="round-button" type="submit">
        Signup
      </button>
    </form>
  );
}

export default SignUpForm;
