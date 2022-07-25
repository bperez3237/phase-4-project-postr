import React from "react";
import {useState, useEffect} from 'react'
import {Button, Col, Row, Container} from 'react-bootstrap'
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({onLogin, location, setLocation}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container className=''>
            <Row className="">
            <Col className="">
            <h1 style={{"color":'white', "backgroundColor":"blue"}} >POSTR</h1>
            {showLogin ? (
                <div>
                    <LoginForm className='' onLogin={onLogin} location={location} setLocation={setLocation}/>
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
            </Row>
        </Container>
    )


}

export default Login;