import React, { useState, useEffect } from 'react';

// React components
import TextBlock from './TextBlock.js';
import TodoTextBlock from './TodoTextBlock.js';

// Bootstrap components
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Context
import { useTheme } from '../context/ThemeContext';


const TodoPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [newTask, setTask] = useState(false);
    const [blockState, setBlockState] = useState(false);
    const [text, setText] = useState('');
    const [doubleClick, setClickAmount] = useState(0);
    const theme = useTheme();

    const onEditClick = (e) => { 
        setClickAmount(prev => prev + 1);
        onDoubleClick(e);
    }

    const onDoubleClick = (e) => {
        if(doubleClick < 2) return;
        if(doubleClick == 2) {
            console.log('double click');
            setBlockState(prev => prev ? false : true);
            setClickAmount(0);
        }
    }

    return ( 
        <>
            <Navbar bg="primary" data-bs-theme="" className='justify-content-between'>
                <Container>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2" 
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form> 
                </Container>
            </Navbar>  
            <Container style={{ backgroundColor: (theme.theme === 'dark' ? '#313647' : 'white'), overflow: 'hidden'}} className='d-flex flex-column vh-100 pe-0 ps-0 pt-0 pb-3' fluid>   
                
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
                <Row className='vw-100 m-0'>
                    <Col className='d-flex p-0' xs={2}>
                    {/* width: '300px */}
                        <Container style={{height: '100vh', backgroundColor: '#d5d5d591'}}></Container>
                    </Col>  
                    <Col className='d-flex flex-column p-0' 
                        style={{backgroundColor: 'white', height: '100vh', overflowY: 'auto', overflowX: 'hidden'}} xs={10} md={10} lg={10} xl={10}>  
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body className='p-1'>
                                        <Row xs={1}> 
                                            <Col xs={12} className='d-flex align-items-center'>
                                                <Button size={'sm'} variant='primary' className='me-2' onClick={() => setActiveIndex((prev) => prev ? 0 : 1)}>+ Expand</Button>
                                                <h3 className='ms-2 mt-1'>Create new Task</h3>
                                            </Col>
                                        </Row>
                                    </Card.Body>  
                                    <TodoTextBlock open={activeIndex == 1} />
                                    {/* <Button className='mt-2' variant='primary'>+</Button> */}
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                        <Row className='p-3' xs={1}>
                            <Col className='justify-content-center' style={{ backgroundColor: "", width: ''}} xs={12}>
                                <Card className='p-2' style={{maxWidth: '', height: 'fit-content'}}> 
                                    <Card.Body>
                                        Hello
                                    </Card.Body>  
                                    <TextBlock />
                                    <Button className='mt-2' variant='primary'>+</Button>
                                </Card>
                            </Col>    
                        </Row> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TodoPage;