import React from 'react'
import { useState } from 'react'

const FetchAPI = () => {
    // create a state variable to store our API results
    const [coins,setCoin] = useState([])
    const fetchData = () => {
    
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response)=>{
                return response.json()//so we can parse the response to json - computer language
            })
            .then((response)=>{
                console.log("Getting back response from API", response)
                setCoin(response)
            })
            .catch((err)=>{
                console.log("This is the catch all error", err)
            })
            console.log("I am texting a friend while the dog is fetching or I am running other tasks")
    }
    return(
        <div>
        <h1>FetchAPI</h1>
        <button onClick={fetchData}>Click me for Crypto Data</button>
        {
            coins.map((c, idx)=>{
                return(
                    <div key = {idx}>
                        <img src = {c.image} alt = "crypto coint poic" height= "100px" />
                        <h3>{c.name +": $"+ c.current_price}</h3>
                        
                    </div>
                )
            })
        }
        </div>
    )
}

export default FetchAPI