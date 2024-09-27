import React, { useState, useEffect } from 'react';

// Bootstrap Components
import Form from 'react-bootstrap/Form';

const TextBlock = () => {
    const [text, onChange] = useState("");
    const [amtOfRows, setRowAmount] = useState(1);

    const onChangeHandler = (e) => {
        onChange(e.target.value) 
        console.log(`The text from e.target.value: ${e.target.value}`) 
    }

    const onKeyDownHandler = (e) => {
        console.log(`Testing key combinations: ${e.key}`)
        switch (e.key.toLowerCase()) {
            case 'backspace':
                console.log('backspace');
                if(amtOfRows > 1) setRowAmount(prev => prev - 1);
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
        <Form.Control
            name='editableBlock' 
            as='textarea'
            className='remove-focus'
            placeholder={text}
            rows={amtOfRows}
            onChange={(e) => {onChangeHandler(e)}} 
            onKeyDown={(e) => {onKeyDownHandler(e)}}
        /> 
    )
}

export default TextBlock;