import React, {useState} from "react";
import {storage} from '../../firebase'
import {ref, getDownloadURL} from 'firebase/storage'
import ErrorMessage from "../errors/ErrorMessage";

function SignUpForm({setLoginState, loginState}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name,setName] = useState("")
    const [errors, setErrors] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('')


    getDownloadURL(ref(storage, `images/default_image/twitter-avi-gender-balanced-figure.png`))
    .then((url)=>setAvatarUrl(url))
    .catch((error)=>console.log(error))


  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors(null);
      // setIsLoading(true);
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
          avatar: avatarUrl
        }),
      }).then((r) => {
        // setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            setLoginState({...loginState, user: user})
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
        {errors ? <ErrorMessage errors={errors} setErrors={setErrors}/> : null}
        <div>
          <label>Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
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
        <button style={{width:'100%'}} className='round-button' type='submit'>Signup</button>
      </form>
    )


}

export default SignUpForm;