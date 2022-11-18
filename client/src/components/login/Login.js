import React from "react";
import {useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css'
import {GrMapLocation} from 'react-icons/gr'

function Login({onLogin, location, setLocation}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='login-container'>
            <GrMapLocation size='3em' color='white' />
            <h2 className='greeting' >Sign in to Postr</h2>
            {showLogin ? (
                <div id='login-form'>
                    <LoginForm className='' onLogin={onLogin} location={location} setLocation={setLocation}/>
                    <p>
                        Don't have an account?
                        <span onClick={() => setShowLogin(false)}> Sign Up</span>
                    </p>
                </div>
            ) : (
                <div id='signup-form'>
                    <SignUpForm onLogin={onLogin}/>
                    <p>
                        Have an account already?
                        <span onClick={() => setShowLogin(true)}> Log In</span>
                    </p>
                </div>
            )}
        </div>
    )


}

export default Login;