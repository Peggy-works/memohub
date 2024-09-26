import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Context
import { useTheme } from '../context/ThemeContext';


const NotesPage = () => {
    const theme = useTheme();

    return ( 
        <Container style={{ backgroundColor: (theme.theme === 'dark' ? '#313647' : 'white'), overflow: 'hidden'}} className='d-flex vh-100 p-0' fluid>    
        {/* className='align-items-center justify-content-center vh-100 vw-100 m-0 p-0' */}          
        {/*<Container style={{ backgroundColor: (theme.theme === 'dark' ? '#313647' : 'white')}} className='d-flex justify-content-center vh-100 p-0' fluid>*/}
            {/* 
                <Row className='vh-100' xs={2}>
                    <Col className='d-flex m-0 ps-3' style={{backgroundColor: 'beige'}} xs={2}>1 of 2</Col>
                    <Col className='d-flex flex-column pt-3 ps-3 pe-3' style={{backgroundColor: 'blueviolet'}} xs={10}>
                        <Row  className=''>
                            <Col xs={8}>
                                <p>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH</p>
                            </Col>
                        </Row>
                        <Row>
                            <h3>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloH</h3>
                        </Row>
                    </Col> 
                </Row>
            */}
            <Row className='vw-100'>
                <Col className='d-flex p-0' xs={2}>
                {/* width: '300px */}
                    <Container style={{height: '100vh', backgroundColor: 'black'}}></Container>
                </Col>  
                <Col className='d-flex flex-column p-0' style={{backgroundColor: 'blueviolet', height: '100vh'}} xs={10} md={10} lg={10} xl={10}>  
                    <Row className='' xs={1}>
                        <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                            <Card style={{maxWidth: '', height: 'fit-content'}}>
                                <Card.Header>
                                HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
                                </Card.Header>
                                <Card.Body>
                                    Hello
                                </Card.Body>
                                <Button variant='primary'>+</Button>
                            </Card>
                        </Col>    
                    </Row> 
                    <Col style={{ backgroundColor: ""}}>
                        <Card style={{width: '100%'}}>
                            <Card.Header>
                                <Card.Text>Hello</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                Hello
                            </Card.Body>
                            <Button variant='primary'>+</Button>
                        </Card>
                    </Col> 
                </Col>
            </Row>
        </Container>
    )
}

export default NotesPage;