import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import fetch from 'node-fetch';
import Col from 'react-bootstrap/esm/Col';

const WeatherWidget = ({data}) => {
    const [weatherData, setData] = useState(null);

    useEffect(() => {
        setData({...data});
        console.log(weatherData);
    }, [])
    //console.log(`Here in widget`)
    //console.log(data)
    

    return(
        <Container>
            <Row>
                <Col>
                    <img src={data?.current.condition.icon} width={64} height={64}/>
                </Col>
                <Col>
                    <h3>{data?.location.name}</h3>
                    <h3>{data?.location.tz_id}</h3>
                    <h3>{data?.current.temp_f}</h3>
                    <h3>{data?.current.humidity}</h3>
                </Col>
            </Row>
        </Container>   
    )
}

export default WeatherWidget;