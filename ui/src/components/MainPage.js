import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Carousel from 'react-bootstrap/Carousel';
import fetch from 'node-fetch';
import WeatherWidget from './WeatherWidget';
import LogWidgetTest from './LoggingWidget/LogWidgetTest';

const MainPage = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    console.log(apiKey);
    
    let options = {
        "method": "GET",
        "headers": {}
    }

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=92056&aqi=no`, options)
        .then(response => { 
            if(!response.ok == 200){
                console.log("error")
            }
            setLoading(false);
            return response.json()
        })
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [])

    return(
        <Container className='main-container d-flex flex-column align-items-baseline justify-content-center vh-100 py-5' fluid> 
            <Container className='d-flex justify-content-center py-3'>
                <h3><span style={{ color: 'blue'}}>@</span>Peggy-works space</h3>
            </Container>
            {
                loading ? "Loading..." : (
                    <Container className='d-flex flex-column'>
                        <Row className='justify-content-center align-items-center'>
                            <Col xs={2}>
                                <WeatherWidget data={data} />
                            </Col>
                            <Col xs={3}>
                                <ul className='pipe-decoration m-0'>
                                    <li><a href='https://github.com/Peggy-works/memohub'>The code for this website</a></li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                    <li>Hello</li>
                                </ul>
                            </Col>
                        </Row>
                        {
                            /*
                            <Row className='vw-100'>
                            <LogWidgetTest />
                            </Row>
                            */
                        }
                    </Container>
                )
            }
            <Container className='d-flex justify-content-center py-3'>
                <Row className='vw-100'>
                    <LogWidgetTest />
                </Row>
            </Container>
            {/*
                <Container className='d-flex justify-content-center py-3'>
                <Row className=''>
                    <Card bg='dark pb-2 pt-2' text='white' style={{ width: '25rem' }}> 
                        <Card.Header>
                            <h3>Raiders Open to WR Change</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                HC Anotionio Pierce has not ruled out a move this week amid 1-2 start. Says Davante Adams needs more "Taco Bell" 👀
                            </Card.Text>
                            <p style={{ color: '#ffffffa8' }}>Angel's Report</p>
                        </Card.Body>
                        <Card.Img src='https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/09/896/500/GettyImages-1427369276.jpg?ve=1&tl=1'></Card.Img>
                    </Card>
                </Row>
            </Container>
            */}
        </Container>
    )
}

export default MainPage