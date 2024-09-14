import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

//Constants
import { categories } from '../constants/constants.js';

const FoodLogWidgetTest = () => {
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
        
    }

    return ( 
        <Container className='d-flex flex-column align-items-baseline justify-content-center py-4'>
            <h2>{date}</h2>
            <Table className='' striped bordered hover responsive='sm'>
                <thead>
                    <tr>
                        <th colSpan={2}>{date}</th>
                    </tr>
                </thead>
                <tbody> 
                    { /*categories.map((val, _) => { return (<tr>{val}{days.map((val, _) => <th></th>)}</tr>) })*/ } 
                    { /* categories.map((val, index) => (
                        <tr key={index}>
                            <th className='d-md'>{val}</th>
                            <td className='d-flex py-2' key={index}>
                                    <Form.Control as='textarea' rows={1} />
                                    <Button className='mx-3' variant="outline-primary" onClick={(e) => handleClick(e)}>+</Button>
                            </td> 
                        </tr>
                    ))
                    */}
                    {
                        <tr>
                            <td>
                                <Dropdown>{/*data-bs-theme="dark"*/}
                                    <Dropdown.Toggle size='lg' variant='success'>
                                        Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu  size='lg'>
                                    {categories.map((val, index) => (
                                        <Dropdown.Item href='#'>{val}</Dropdown.Item>
                                    ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            <td>
                                <Button className='mx-3' variant="outline-primary" onClick={(e) => handleClick(e)}>+</Button>
                            </td> 
                        </tr>
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </Table>
        </Container> 
    )
} 


export default FoodLogWidgetTest;