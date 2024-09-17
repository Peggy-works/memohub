import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

//Constants
import { categories } from '../constants/constants.js';

const FoodLogDisplay = () => {
    const [foodType, setType] = useState('Category');

    const handleClick = (e) => {
        console.log(e.target.name);
        setType(e.target.name);
    }

    return(
        <Card.Body className='d-flex flex-column'>
            <div className='d-flex align-items-center py-1'>
                <h5>Select Food Type: </h5>
                <Button className='my-1 mx-2' variant="outline-primary" style={{ width: 'fit-content'}}>Categories</Button> 
                <Button className='my-1' variant="outline-primary" style={{ width: 'fit-content'}}>Search</Button> 
            </div>
            <div className='d-flex'>
                <Dropdown>{/*data-bs-theme="dark"*/}
                    <Dropdown.Toggle size='lg' variant='success' style={{ width: '300px' }}>
                        {foodType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu  size='lg' style={{ width: '300px' }}>
                    {categories.map((val, index) => (
                        <Dropdown.Item  onClick={(e) => handleClick(e)} href='#' key={index} name={val}>{val}</Dropdown.Item>
                    ))}
                    </Dropdown.Menu>
                </Dropdown> 
                <Button className='mx-3' variant="outline-primary" style={{ width: '50px'}}>+</Button> 
            </div>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
        </Card.Body>
    )
}

export default FoodLogDisplay;