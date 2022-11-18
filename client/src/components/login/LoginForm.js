import React from "react";
import {useState, useEffect} from 'react'
import { Button, Form} from 'react-bootstrap'
import RoundedButton from "./RoundedButton";

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
            <Form  className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="username"
                        id="username"
                        autoComplete="off"
                        value={username}
                        placeholder="Enter Email"
                        onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Select value={location.id} onChange={handleChange}>
                    {locations ? optionElements : <></>}
                </Form.Select>
                <RoundedButton>Login</RoundedButton>
        </Form>
    );
}

export default LoginForm;
