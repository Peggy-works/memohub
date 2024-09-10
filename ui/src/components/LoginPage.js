import React, { useState } from 'react';
import fetch from 'node-fetch';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
    const [data, setData] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log("trying to submit")
        navigate("/main")
    }

    const handleChange = (event) => {
        console.log("trying to change")
    } 
    
    return ( 
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Container className='d-flex align-items-baseline justify-content-center vh-100 py-5'>
                <Row className='mt-5'>
                    <Row>
                        <h3 className='text-center mt-5'>Login here to MemoHub</h3>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col xs={8} lg={6}>
                            <Form.Group className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type='' name='email' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={8} lg={6}>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={8} lg={6}>
                            <Button variant='primary' size='lg' type='submit' onChange={(event) => handleChange(event)}>Submit</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Form> 
    )
}

export default LoginPage;