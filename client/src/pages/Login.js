import React from "react";
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <h1>POSTR</h1>
            {showLogin ? (
                <div>
                    <LoginForm onLogin={onLogin}/>
                    <p>
                        Don't have an account? &nbsp;
                        <Button color="secondary" onClick={() => setShowLogin(false)}>
                        Sign Up
                        </Button>
                    </p>
                </div>
            ) : (
                <div>
                    <SignUpForm onLogin={onLogin}/>
                    <p>
                        Already have an account? &nbsp;
                        <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                        </Button>
                    </p>
                </div>
            )}
        </div>
    )


}

export default Login;