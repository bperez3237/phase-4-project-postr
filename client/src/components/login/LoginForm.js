import React from "react";
import {useState, useEffect} from 'react'
import { Button, Form} from 'react-bootstrap'

function LoginForm({onLogin, location, setLocation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        fetch('/locations')
            .then((r)=>r.json())
            .then((locations)=>{
                setLocation(locations[0])
                setLocations(locations)
            })
    },[])
   
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        const loginObj = {
            username: username,
            password: password,
            location_id: location.id
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
                        onLogin(user)
                    });
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    function handleChange(e) {
        fetch(`/locations/${e.target.value}`)
            .then((r)=>r.json())
            .then((location)=>setLocation(location))
    }

    const optionElements = locations.map((location)=><option key={location.id} value={location.id}>{location.name}</option>)

    return (
            <div  className="login-form" onSubmit={handleSubmit}>
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
                <select value={location.id} onChange={handleChange}>
                    {locations ? optionElements : <></>}
                </select>
                <button style={{width:'100%', fontWeight:'600px'}} className='round-button' type='submit'>Login</button>
        </div>
    );
}

export default LoginForm;
