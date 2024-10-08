import React, { useState, useEffect, useRef } from 'react';

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

// Constants 
import { exampleBlocks } from '../constants/constants';


const TodoTextBlock = ({ open }) => {
    const [render2, setRenderElements] = useState([]);
    const [html, setHtml] = useState([]);
    const [text, onChange] = useState("");
    const [render, setRows] = useState([]);
    const [amtOfRows, setRowAmount] = useState(2);
    const [regexOut, setRegex] = useState(null);
    const [key, setKey] = useState("");

    const deriveText = /<div tabindex="0">(.*)<\/div>/;

    const currentFocusRef = useRef(null);

    //const render = []

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

    const handleContentClick = (e) => {
        //can get data attribute here
        console.log(e);
        /*
        currentFocusRef.current.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(currentFocusRef.current); 
        sel.addRange(range);
        */
    }

    const onInput = (e) => { 
        //onChange(e.target.value); 
        let testingRange = document.createRange();
        testingRange.selectNodeContents(currentFocusRef.current);
        console.log(testingRange.startContainer.getAttribute('data-testing'));
        console.log(e);
        if(e.target.getAttribute('data-testing')){
            console.log(e.target.getAttribtue('data-testing'));
        }
        console.log(e.target.innerHTML); 
        const result = e.target.innerHTML.match(deriveText); 
        if(result && result.length > 0) {
            console.log(`Text after regex that is going to get added: ${result[1]}`)
            onChange(result[1]);
            //onChange(e.target.innerHTML);
        }
    }


    /**
     * Be aware of the following:
     * 1. backspacing (removing an entire line of text/backspacing to previous line) will delete that div
     * 2. enter creates a new child div with text content
     */
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
                console.log('Pressed enter onkeydownhandler');
                console.log(`the current text going to be added to render list: ${text}`);
                e.preventDefault();
                //const result = text.match(deriveText);
                if(render.length === 0) {
                    let textObject = {
                        id: render.length + 1
                    }
                    //if(result) console.log(`Regex: ${text.match(deriveText)[1]}`);
                    setRows([text, "newline"]);
                } else {
                    //if(result) console.log(`Regex: ${text.match(deriveText)[1]}`);
                    setRows(prev => [...prev, text]);
                }
                setRowAmount(prev => prev + 1);
                setKey('enter');
                return;
            case 'backspace':
                console.log('Pressed on backspace');
                if(currentFocusRef.current){
                    const range = document.createRange();
                    range.selectNodeContents(currentFocusRef.current);
                    console.log(`Happening in case backspace: ${range.toString()}`);
                    if(range.toString().length < 1){
                        e.preventDefault();
                        setRows(prev => prev.slice(0, -1));
                    }
                }
                setKey('backspace');
                return;
            default:
                break;
        } 
        //setHtml(MarkdownParser(c[0]));
    }

    useEffect(() => {
        if (currentFocusRef.current && key === 'enter') {
            /*
            dont quite understand this yet

            currentFocusRef.current.focus();
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(currentFocusRef.current);
            range.collapse(false); // Move to the end of the content
            sel.removeAllRanges();
            sel.addRange(range);
            */
            //currentFocusRef.current.focus();
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(currentFocusRef.current); // this selects that node specifically, to string gives us string of text content
            console.log(`Use effect range object: ${range.toString()}`);
            console.log(`Use effect list: ${render}`);
            range.collapse(false); // Move to the end of the content
            sel.removeAllRanges();
            sel.addRange(range);
            console.log(`Selection object: ${sel.toString()}`)
        }
        let c = text.split('\n');
        let elements_t = [];
        for(let x = 0; x < c.length; x++){
            elements_t.push(MarkdownParser(c[x]));
            //setHtml(MarkdownParser(c[x]));
        }
        setHtml([...elements_t]);
    }, [text, render, key]);
    {/*<div onKeyUp={(e) => onChangeHandler(e)} className='p-3' contentEditable='true'>
                Helloooooooooo
            </div>*/}
    return(
        <div className='p-2' contentEditable={true} onKeyDown={(e) => onKeyDownHandler(e)} onInput={(e) => onInput(e)}>
            { 
                
                render.length > 0 ? render.map((value, index) => {
                    if(render.length-1 === index){
                        return (
                            <div key={index} onClick={(e) => handleContentClick(e)} data-testing={"testing-" + index} ref={currentFocusRef} tabIndex={0}>
                                {value === 'newline' ? <span><br/></span> : <span>{value}</span> }
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} onClick={(e) => handleContentClick(e)} data-testing={"testing-" + index}>
                                {value}
                            </div>
                        )
                    }
                }) : (
                    <div ref={currentFocusRef} onClick={(e) => handleContentClick(e)} tabIndex={0}>
                        <br></br>
                    </div>
                )
                
            }
            {   
                /*
                render.length > 0 ? render.map((value, index) => {
                    if(render.length-1 === index){
                        return (
                            <div key={index} ref={currentFocusRef} tabIndex={0}>
                                {value}
                            </div>
                        )
                    } else {
                        return (
                            <div key={index}>
                                {value}
                            </div>
                        )
                    }
                }) : (
                    <div ref={currentFocusRef} tabIndex={0}>
                        <br></br>
                    </div>
                )
                */
            }
            {
            /*
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
            */
            }
        </div> 
    )
}

export default TodoTextBlock;