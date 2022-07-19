import React from "react";
import {useState} from 'react'
import {Alert, Button, Container,  Form} from 'react-bootstrap'

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
            }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return (
        <Container className="d-flex">
            <Form  className="justify-content-center" style={{"width":"300px"}} onSubmit={handleSubmit}>
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
                <Form.Group className="mb-4">
                    <Button variant="primary" type="submit">
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Alert key={errors}>{errors}</Alert>
                </Form.Group>
        </Form>
      </Container>
    );
}

export default LoginForm;
