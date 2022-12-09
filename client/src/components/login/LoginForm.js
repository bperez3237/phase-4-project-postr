import React from "react";
import {useState, useEffect} from 'react'
import ErrorMessage from "../errors/ErrorMessage";

function LoginForm({loginState, setLoginState}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [allLocations, setAllLocations] = useState([])

    useEffect(()=>{
        fetch('/locations')
            .then((r)=>r.json())
            .then((locations)=>{
                setAllLocations(locations)
                setSelectedLocation(locations[0])
            })
    },[])
   
    function handleSubmit(e) {
        e.preventDefault();

        const loginObj = {
            username: username,
            password: password,
            location_id: selectedLocation.id
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginObj),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((login) => {
                        setLoginState(login)
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

    const optionElements = allLocations.map((location)=><option key={location.id} value={location.id}>{location.name}</option>)

    return (
        <form  className="login-form" onSubmit={handleSubmit}>
            {errors ? <ErrorMessage errors={errors} setErrors={setErrors}/> : null}
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
                    {allLocations ? optionElements : <></>}
                </select>
            <button style={{width:'100%', fontWeight:'600px'}} className='round-button' type='submit'>Login</button>
        </form>
    );
}

export default LoginForm;
