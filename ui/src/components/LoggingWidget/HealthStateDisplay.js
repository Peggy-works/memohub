import React from 'react';

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
import Alert from 'react-bootstrap/Alert';

const HealthStateDisplay = () => {
    return(
        <Card.Body className='d-flex flex-column'>  
            <Row className='align-items-center'>
                <Col>
                    <Alert variant='primary'>
                        <div className='circle-progressbar'>
                            <div className='circle-progressbar-2'></div> 
                        </div>  
                    </Alert>
                </Col>
            </Row>   
        </Card.Body>
    )
}

export default HealthStateDisplay;