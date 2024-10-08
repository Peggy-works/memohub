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

// Utils
import { MarkdownParser } from '../utils/utils';


const TodoTextBlock = ({ open }) => {
    const [html, setHtml] = useState([]);
    const [text, onChange] = useState("");
    const [amtOfRows, setRowAmount] = useState(2);
    const [regexOut, setRegex] = useState(null);

    const onClick = (e) => {
        //console.log(e.target.textContent);
        //console.log(`${text}`
        // • 
        /* 
        • I think maybe I need to change1
        • I think maybe I need to change2
        • I think maybe I need to change3
        • I think maybe I need to change4
        */
        //let c = text.split('\n');
        ```for(let x = 0; x < c.length; x++) {
            console.log(c[x]);
            MarkdownParser(c[x]);
        }```
        //setHtml(MarkdownParser(c[0]));
    }

    const onChangeHandler = (e) => {
        onChange(e.target.value) 
        console.log(`The text from e.target.value: ${e.target.value}`) 
    }

    const onKeyDownHandler = (e) => {
        console.log(e);
        console.log(`Testing key combinations: ${e.key}`)
        /*
        
        case 'backspace':
                console.log('backspace');
                if(amtOfRows > 2) setRowAmount(prev => prev - 1);
                return;
        */
        switch (e.key.toLowerCase()) { 
            case 'enter':
                console.log('enter');
                setRowAmount(prev => prev + 1);
                return;
            default:
                break;
        } 
        //setHtml(MarkdownParser(c[0]));
    }

    useEffect(() => {
        let c = text.split('\n');
        let elements_t = [];
        for(let x = 0; x < c.length; x++){
            elements_t.push(MarkdownParser(c[x]));
            //setHtml(MarkdownParser(c[x]));
        }
        setHtml([...elements_t]);
    }, [text]);
    {/*<div onKeyUp={(e) => onChangeHandler(e)} className='p-3' contentEditable='true'>
                Helloooooooooo
            </div>*/}
    return(
        <>
            <Collapse in={open}> 
                <div> 
                    <Row className='align-items-center pt-3'>
                        <Col xs={8}>
                            <InputGroup style={{ width: '60%' }}> 
                                <InputGroup.Text><span className='pe-1' style={{ color: 'blue'}}>@</span>Title</InputGroup.Text> 
                                <FormControl
                                type='text'
                                placeholder='...'
                                />  
                            </InputGroup>
                        </Col>  
                    </Row>   
                    <Row className='align-items-center pt-3'>
                        <Col className='d-flex justify-content-center'> 
                        <InputGroup>
                            <InputGroup.Text style={{width: '75px'}}><span className='pe-1' style={{ color: 'blue' }}>@</span>Body</InputGroup.Text>
                            <Form.Control
                                name='editableBlock'  
                                as='textarea' 
                                className='remove-focus'
                                placeholder={text}
                                rows={amtOfRows}
                                style={{resize: 'none'}}
                                onChange={(e) => {onChangeHandler(e)}} 
                                onKeyDown={(e) => {onKeyDownHandler(e)}}
                            />  
                            <InputGroup.Text className='d-flex flex-column align-items-start' style={{maxWidth: '700px', width: '700px'}}>{html}</InputGroup.Text> 
                        </InputGroup>
                        </Col> 
                    </Row> 
                </div>
            </Collapse> 
        </>
    )
}

export default TodoTextBlock;