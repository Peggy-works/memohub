import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import fetch from 'node-fetch';
import Col from 'react-bootstrap/esm/Col';
import sunny_p2 from '../assets/Sunny_p.GIF'

const WeatherWidget = ({data}) => {
    const [weatherData, setData] = useState(null);

    useEffect(() => {
        setData({...data});
        console.log(weatherData);
    }, [])
    //console.log(`Here in widget`)
    //console.log(data)
    

    return(
        <Container className='d-flex align-items-baseline justify-content-center' responsive='sm'>
            <Row className='weather-widget'> 
                <Col className='d-flex flex-column align-items-center'>
                    <Col className='d-flex align-items-center'>
                        <img src={sunny_p2} width={64} height={64}/> 
                        <h3>{data?.current.temp_f}</h3>
                        F/C 
                    </Col>
                    <h5>{data?.location.name}</h5>    
                    <h5>{data?.location.tz_id}</h5> 
                    <h5>Humidity: {data?.current.humidity}</h5>
                </Col>
            </Row>
        </Container>   
    )
}

export default WeatherWidget;