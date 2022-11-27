import React from "react";
import {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Login.css'
import {SiThunderbird} from 'react-icons/si'

function Login({loginState, setLoginState}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='login-container'>
            <SiThunderbird size='4em' color='black' />
            <h2 className='greeting' >Sign in to Postr</h2>
            {showLogin ? (
                <div id='login-form'>
                    <LoginForm loginState={loginState} setLoginState={setLoginState}/>
                    <p>
                        Don't have an account?
                        <span onClick={() => setShowLogin(false)}> Sign Up</span>
                    </p>
                </div>
            ) : (
                <div id='signup-form'>
                    <SignUpForm loginState={loginState} setLoginState={setLoginState}/>
                    <p>
                        Have an account already?
                        <span id='login' onClick={() => setShowLogin(true)}> Log In</span>
                    </p>
                </div>
            )}
        </div>
    )


}

export default Login;