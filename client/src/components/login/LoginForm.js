import React, { useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";

function LoginForm({
  loginState,
  setLoginState,
  handleChange,
  optionElements,
  allLocations,
  selectedLocation,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const loginObj = {
      username: username,
      password: password,
      location_id: selectedLocation.id,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
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
      <div className="mb-4">
        <label>Username</label>
        <input
          type="username"
          id="username"
          autoComplete="off"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <div className="mb-4">
        <label>Location</label>
        <select value={loginState.location?.id} onChange={handleChange}>
          {allLocations ? optionElements : <></>}
        </select>
      </div>
      <button
        style={{ width: "100%", fontWeight: "600px" }}
        className="round-button"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
