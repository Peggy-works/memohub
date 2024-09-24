import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

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
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';
import { useWaterLogger } from '../../hooks/useAPI';

// Custom hooks/ API
//import { updateWaterLogger } from '../../utils/api';
//import { useHydrationLogger } from '../../hooks/useHydrationLogger.js';


const LogWaterExpanded = ({ open }) => {
    const { loading, errorMessage, updateWaterLogger } = useWaterLogger();
    const [quant, setQuant] = useState(0);

    const handleClick = (e) => {
        if (e.target.name === 'add' && quant+1 <= 10) setQuant(prev => prev + 1); 
        if (e.target.name === 'subtract' && quant !== 0) setQuant(prev => prev - 1);
    } 

    const handleSubmit = (e) => {
        updateWaterLogger(quant);
    }

    return(
        <Collapse in={open}> 
            <div> 
                <Row className='align-items-center pt-3'>
                    <Col xs={8}>
                        <InputGroup> 
                            <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span>Name</InputGroup.Text> 
                            <FormControl
                            type='text'
                            placeholder='Ounces'
                            disabled/>
                            <InputGroup.Text className='d-flex justify-content-center' style={{width: '50px'}}>
                                {quant}
                            </InputGroup.Text>
                        </InputGroup>
                    </Col> 
                    <Col>
                        <InputGroup >
                            <ButtonGroup>
                                <Button onClick={(e) => handleClick(e)} name='subtract' variant='primary'>-</Button>
                                <Button onClick={(e) => handleClick(e)} name='add' variant='primary'>+</Button>
                            </ButtonGroup>
                        </InputGroup>
                    </Col>
                </Row>  
                <Row className='align-items-center pt-3'> 
                    <Col>
                    <ProgressBar now={quant * 10} /> 
                    </Col>
                </Row>
                <Row className='align-items-center pt-3'>
                    <Col className='d-flex justify-content-center'>
                        <Button variant='primary' onClick={(e) => handleSubmit(e)} style={{width: '100%'}}>submit</Button>
                    </Col>
                    <div className='pt-3'>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>
                </Row>
            </div>
        </Collapse>
    )
}

export default LogWaterExpanded;