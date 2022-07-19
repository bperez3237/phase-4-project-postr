import React from "react";
import {useState} from 'react'
import {Button, Col, Container} from 'react-bootstrap'
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container className='d-flex'>
            <Col className="justify-content-center p-3" style={{"width":"500px"}}>
            <h1 style={{"color":'white', "backgroundColor":"blue"}} >POSTR</h1>
            {showLogin ? (
                <div>
                    <LoginForm className='justify-content-center' onLogin={onLogin}/>
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
            </Col>
        </Container>
    )


}

export default Login;