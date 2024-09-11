import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import fetch from 'node-fetch';
import WeatherWidget from './WeatherWidget';

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
        <Container className='d-flex align-items-baseline justify-content-center vh-100 py-5'> 
            {
                loading ? "Loading..." : <WeatherWidget data={data} />
            }
        </Container>
    )
}

export default MainPage