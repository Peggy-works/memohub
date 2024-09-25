import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import fetch from 'node-fetch';
import Col from 'react-bootstrap/esm/Col';
import sunny_light from '../assets/sunny_light.GIF'
import sunny_dark from '../assets/sunny_dark.GIF'

// Context
import { useTheme } from '../context/ThemeContext.js'

const WeatherWidget = ({data}) => {
    const [weatherData, setData] = useState(null);
    const theme = useTheme();

    useEffect(() => {
        setData({...data});
        console.log(weatherData);
    }, [])
    //console.log(`Here in widget`)
    //console.log(data)
    

    return(
        <Container className='d-flex align-items-baseline justify-content-center' responsive='sm'>
            <Row className={'p-2 weather-widget-' + theme.theme}> 
                <Col className='d-flex flex-column align-items-center'>
                    <Col className='d-flex align-items-center'>
                        <img src={theme.theme === 'dark' ? sunny_dark : sunny_light} width={64} height={64}/> 
                        <h3 style={{color: theme.theme === 'dark' ? 'white' : 'black'}}>{data?.current.temp_f}</h3>
                        <span style={{color: theme.theme === 'dark' ? 'white' : 'black'}}>F/C</span> 
                    </Col>
                    <h5 style={{ color: (theme.theme === 'dark' ? 'white' : 'black')}}>{data?.location.name}</h5>    
                    <h5 style={{ color: (theme.theme === 'dark' ? 'white' : 'black')}}>{data?.location.tz_id}</h5> 
                    <h5 style={{ color: (theme.theme === 'dark' ? 'white' : 'black')}}>Humidity: {data?.current.humidity}</h5>
                </Col>
            </Row>
        </Container>   
    )
}

export default WeatherWidget;