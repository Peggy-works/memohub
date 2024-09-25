import { useState, useEffect } from 'react';

export function useWaterLogger() { 
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState(null); 

    const updateWaterLogger = async (waterAmt) => {
        console.log('drinkdrinkdrink...');
    
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 2,
                waterAmt
            })
        }
    
        try {
            let response = await fetch('http://localhost:3000/api/updateWater', options); 
            console.log(response);
            if(!response.ok){
                const { message } = await response.json();
                console.log(message);
                throw new Error(message);
            }
            let result = await response.json();
            console.log(result);
        } catch(error) {   
            setError(`${error.message.replace('Error: ', '')}`);
        } finally {
            setLoading(false);
        }
    }
    //{error && <p style={{ color: 'red' }}>Error: {error}</p>}
    return { loading, errorMessage, updateWaterLogger };
}