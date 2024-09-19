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

// React Components
import LogWaterExpanded from './LogWaterExpanded.js';

// Constants
import { categories, svgs, radioIcons } from '../constants/constants.js';

const LogDisplay = () => {
    const [foodType, setType] = useState(null);
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('');
    const [quant, setQuant] = useState(0);

    const handleClick = (e) => {
        console.log(e.target.name);
        setType(e.target.name); 
    }

    const handleClickQuant = (e) => {
        if (e.target.name == 'add') return setQuant((prev) => prev + 1);
        if (quant > 0) return setQuant((prev) => prev - 1);
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
            <LogWaterExpanded open={foodType == 'Water (oz or mls)' ? true : false} />
            { /*foodType == 'Water (oz or mls)' && <LogWaterExpanded open={open} />*/}
        </Card.Body>
    )
}

export default LogDisplay;