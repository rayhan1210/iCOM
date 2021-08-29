
import {  Row, Col, Form, Button } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
import { Route } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return(
        <div className="bg-dark p-5 d-flex align-items-center">
            <Form onSubmit={AutheLoginCheck}>
                <div className="d-flex justify-content-center">
                    <h1 className="mb-3 bg-info rounded px-3 py-2">LOGIN</h1>
                </div>
                <h4 className="mb-3 text-muted">Please Enter Your Email and Passowrd.</h4>
                <Form.Group controlId="email">
                    <FloatingLabel label="Email Address" className="mb-3">
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                <Form.Group controlId="email"></Form.Group>
                <Form.Group controlId="pass">
                    <FloatingLabel label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Enter Password"></Form.Control>
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
            
        </div>
    );
}

function AutheLoginCheck(){
    alert( `<h1 className="bg-info">Hello</h1>`);
}

export default Login;