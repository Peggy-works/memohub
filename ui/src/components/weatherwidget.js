import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import fetch from 'node-fetch';

const WeatherWidget = ({data}) => {
    //console.log(`Here in widget`)
    //console.log(data)

    return(
        <div>
            <img src={data?.current.condition.icon} />
            <h3>{data?.location.name}</h3>
            <h3>{data?.location.tz_id}</h3>
            <h3>{data?.current.temp_f}</h3>
            <h3>{data?.current.humidity}</h3>
        </div>   
    )
}

export default WeatherWidget;