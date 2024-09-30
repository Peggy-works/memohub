import React, { useState, useEffect } from 'react';

// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';


const TodoTextBlock = ({ open }) => {
    const [text, onChange] = useState("");
    const [amtOfRows, setRowAmount] = useState(2);

    const onChangeHandler = (e) => {
        onChange(e.target.value) 
        console.log(`The text from e.target.value: ${e.target.value}`) 
    }

    const onKeyDownHandler = (e) => {
        console.log(`Testing key combinations: ${e.key}`)
        switch (e.key.toLowerCase()) {
            case 'backspace':
                console.log('backspace');
                if(amtOfRows > 2) setRowAmount(prev => prev - 1);
                return;
            case 'enter':
                console.log('enter');
                setRowAmount(prev => prev + 1);
                return;
            default:
                break;
        }
    }

    useEffect(() => {console.log(`THe text within handler: ${text}`);}, [text]);
    {/*<div onKeyUp={(e) => onChangeHandler(e)} className='p-3' contentEditable='true'>
                Helloooooooooo
            </div>*/}
    return(
        <>
            <Collapse in={open}> 
                <div> 
                    <Row className='align-items-center pt-3'>
                        <Col xs={8}>
                            <InputGroup> 
                                <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span>Title</InputGroup.Text> 
                                <FormControl
                                type='text'
                                placeholder='...'
                                />
                                <InputGroup.Text className='d-flex justify-content-center' style={{width: '50px'}}>
                                    13
                                </InputGroup.Text>
                            </InputGroup>
                        </Col> 
                        <Col>
                            <InputGroup >
                                <ButtonGroup>
                                    <Button name='subtract' variant='primary'>-</Button>
                                    <Button name='add' variant='primary'>+</Button>
                                </ButtonGroup>
                            </InputGroup>
                        </Col>
                    </Row>   
                    <Row className='align-items-center pt-3'>
                        <Col className='d-flex justify-content-center'> 
                            <Form.Control
                                name='editableBlock' 
                                as='textarea'
                                className='remove-focus'
                                placeholder={text}
                                rows={amtOfRows}
                                onChange={(e) => {onChangeHandler(e)}} 
                                onKeyDown={(e) => {onKeyDownHandler(e)}}
                            /> 
                        </Col> 
                    </Row>
                    <Row className='align-items-center pt-3'>
                        <Col className='d-flex justify-content-center'>
                            <Button variant='primary' style={{width: '100%'}}>submit</Button>
                        </Col> 
                    </Row>
                </div>
            </Collapse> 
        </>
    )
}

export default TodoTextBlock;