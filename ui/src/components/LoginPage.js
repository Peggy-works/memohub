import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const LoginPage = () => {
    return ( 
        <Form>
            <Container className='d-flex align-items-baseline justify-content-center vh-100 py-5'>
                <Row className='mt-5'>
                    <Row>
                        <h3 className='text-center mt-5'>Login here to MemoHub</h3>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col xs={8} lg={6}>
                            <Form.Group className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' name='email' />
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
                </Row>
            </Container>
        </Form> 
    )
}

export default LoginPage;