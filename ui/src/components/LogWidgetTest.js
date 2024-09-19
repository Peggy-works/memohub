import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'; 
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

//Components
import LogDisplay from './LogDisplay.js';
import HealthStateDisplay from './HealthStateDisplay.js';
import UpdateLoggerDisplay from './UpdateLoggerDisplay.js';

//Constants
import { categories } from '../constants/constants.js';

const LogWidgetTest = () => {
    const [currentTab, setCurrentTab] = useState('health');
    const [meals, setMeals] = useState(null);
    const [snacks, setSnacks] = useState(null);
    const [beverages, setBev] = useState(null);
    const [water, setWater] = useState(null);
    const [calories, setCal] = useState(null);
    const [excercise, setEx] = useState(null);
    const [sleep, setSleep] = useState(null); 
    const [date, setDate] = useState(new Date().toDateString());

    let length = 2;
    let days = Array.from({ length }, (_, index) => `Days ${index + 1}`); 

    const handleClick = (e) => {
        setCurrentTab(e.target.name);
    }

    console.log(`before return: ${currentTab}`)

    return ( 
        <Container className='d-flex flex-column align-items-start justify-content-start' style={{ height: '400px'}}>
            <Card border='dark' className='mb-2' text='dark' style={{ width: '400px'}}>
                <Card.Header>
                    {date}
                </Card.Header>
                <Card.Header> 
                    <Nav variant='pills' defaultActiveKey={'#' + currentTab}>
                        <Nav.Item onClick={(e) => handleClick(e)}>
                            <Nav.Link href='#health' name='health'>Health</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={(e) => handleClick(e)}>
                            <Nav.Link href='#logger' name='logger'>Logger</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={(e) => handleClick(e)}>
                            <Nav.Link href='#update' name='update'>Update info.</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                { currentTab == 'health' && <HealthStateDisplay />}
                { currentTab == 'logger' && <LogDisplay />}
                { currentTab == 'update' && <UpdateLoggerDisplay />}
            </Card>
        </Container> 
    )
} 


export default LogWidgetTest;