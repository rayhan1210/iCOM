import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Signup.css';
// import { FloatingLabel } from 'react-bootstrap';

const Signup = () => {
    return(
        <div className="signup justify-content-center rounded">
            <Form className="p-4">
                <div className="d-flex justify-content-center"><h1>Sign Up</h1></div>
                <Row>
                    <Col>
                        <Form.Label className="labeling">First Name: </Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Col>
                    <Col>
                        <Form.Label className="labeling">Last Name: </Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label className="mt-3 labeling" >Email:</Form.Label>
                    <Form.Control calssName="d-flex flex-grow-1" type="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-3 labeling">Password:</Form.Label>
                    <Form.Control  type="password"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-5 labeling">Gender:</Form.Label>
                </Form.Group>
                {['Checkbox'].map((type) => (
                    <div key={`${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`Male-${type}`}
                            label={`Male`}
                        />
                        <Form.Check
                            type={type}
                            id={`Female-${type}`}
                            label={`Female`}
                        />
                    </div>
                ))}
                <div className="d-flex justify-content-center">
                    <Button className="my-2 d-flex justify-content-center">Sign Up</Button>
                </div>
            </Form>
        </div>
    );
}

export default Signup;