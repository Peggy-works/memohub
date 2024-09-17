import React, { useState, useEffect } from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SplitButton from 'react-bootstrap/SplitButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Constants
import { categories, svgs, radioIcons } from '../constants/constants.js';

const FoodLogDisplay = () => {
    const [foodType, setType] = useState(null);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const handleClick = (e) => {
        console.log(e.target.name);
        setType(e.target.name);
    }

    return(
        <Card.Body className='d-flex flex-column'>  
            <Row className='align-items-center'>
                <Col>
                    <InputGroup> 
                        <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span>Category</InputGroup.Text>
                        <Dropdown>{/*data-bs-theme="dark"*/}
                            <Dropdown.Toggle size='sm' variant='primary'> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu  size='sm'>
                            {categories.map((val, index) => (
                                <Dropdown.Item  onClick={(e) => handleClick(e)} href='#' key={index} name={val}>{val}</Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown> 
                        <FormControl
                        type='text'
                        placeholder={foodType || '---'}
                        disabled /> 
                    </InputGroup>
                </Col>
            </Row>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
            <Row style={{ width: 'fit-content'}}>
                    {radioIcons.map((radio, index) => (
                        <Col className='pe-0'>
                            <ToggleButton 
                                key={index}
                                id={`radio-${index}`}
                                type='radio' 
                                value={radio.value} 
                                checked={radioValue == radio.value} 
                                variant='primary' 
                                style={{ borderRadius: '100%', border: '2px solid black'}}
                                onChange={(e) => setRadioValue(e.target.value)}
                            >
                                <svg className={radio.classes} xmlns="http://www.w3.org/2000/svg" width={radio.width} height={radio.height} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
                                </svg>
                            </ToggleButton>
                            {/**
                             * 
                             * Use object property
                             * icons {
                             *  sun: (<svg></svg>)
                             * }
                             */}
                        </Col> 
                    ))} 
            </Row>
            <hr style={{ border: '3px solid', borderRadius: '3px', color: "black"}}></hr>
            <Row className='pb-3 align-items-center'>
                <Col>
                    <InputGroup className='mb-3'> 
                        <SplitButton
                        variant="outline-secondary"
                        title="Type"
                        id="segmented-button-dropdown-1"
                        >
                            <Dropdown.Item>Manual</Dropdown.Item>
                            <Dropdown.Item>Search</Dropdown.Item>
                        </SplitButton> 
                        <FormControl
                        type='text'
                        placeholder='holder'
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Card.Body>
    )
}

export default FoodLogDisplay;