import React from "react";
import {useState, useEffect} from 'react'

function LoginForm({loginState, setLoginState}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        fetch('/locations')
            .then((r)=>r.json())
            .then((locations)=>{
                setLoginState({...loginState, location: locations[0]})
                setLocations(locations)
            })
    },[])
   
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        const loginObj = {
            username: username,
            password: password,
            location_id: loginState.location?.id
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginObj),
            }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((user) => {
                        setLoginState({...loginState, user: user})
                    });
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }


    function handleChange(e) {
        fetch(`/locations/${e.target.value}`)
            .then((r)=>r.json())
            .then((location)=>{
                // setLocation(location)
                setLoginState({...loginState, location: location})
            })
    }

    const optionElements = locations.map((location)=><option key={location.id} value={location.id}>{location.name}</option>)

    console.log(errors)
    return (
        <form  className="login-form" onSubmit={handleSubmit}>

            <div className="mb-4">
                <label>Username</label>
                    <input
                        type="username"
                        id="username"
                        autoComplete="off"
                        value={username}
                        placeholder="Enter Email"
                        onChange={(e) => setUsername(e.target.value)}/>
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
                <select value={loginState.location?.id} onChange={handleChange}>
                    {locations ? optionElements : <></>}
                </select>
            <button style={{width:'100%', fontWeight:'600px'}} className='round-button' type='submit'>Login</button>
        </form>
    );
}

export default LoginForm;
