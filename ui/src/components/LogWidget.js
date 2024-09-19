import React, { useState, useEffect } from 'react';

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

//Constants
import { categories } from '../constants/constants.js';

const LogWidget = () => {
    const [meals, setMeals] = useState(null);
    const [snacks, setSnacks] = useState(null);
    const [beverages, setBev] = useState(null);
    const [water, setWater] = useState(null);
    const [calories, setCal] = useState(null);
    const [excercise, setEx] = useState(null);
    const [sleep, setSleep] = useState(null); 
    const [date, setDate] = useState(new Date().toDateString());

    let length = 7;
    let days = Array.from({ length }, (_, index) => `Days ${index + 1}`); 

    return ( 
        <Container className='d-flex align-items-baseline justify-content-center vh-100 py-5'>
            <h2>{date}</h2>
            <Table className='' striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        { days.map((val, _) => { return <th style={{textAlign: 'center'}}>{val}</th> }) } 
                    </tr>
                </thead>
                <tbody> 
                    { /*categories.map((val, _) => { return (<tr>{val}{days.map((val, _) => <th></th>)}</tr>) })*/ } 
                    { categories.map((val, index) => (
                        <tr key={index}>
                            <th className='d-md'>{val}</th>
                            {Array.from({ length: 6 }).map((day, index) => (
                                <td key={index}>
                                    <Form.Control as='textarea' rows={1} />
                                    <Button variant="outline-primary">+</Button>
                                </td> 
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>

                </tfoot>
            </Table>
        </Container> 
    )
}  

export default LogWidget;