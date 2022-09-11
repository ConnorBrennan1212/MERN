import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AxiosPokemon = () => {
    const [poke, setPoke] = useState([])
    const FetchData=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((response)=>{
            console.log("data from API", response.data)
            setPoke(response.data.results)
        })
        .catch((err)=>{
            console.log("This is the catch all error", err)
        })
    }
  return (
    <div>
        <h1>Fetch Pokemon</h1>
        <button onClick={FetchData}>Click me for Pokemon</button>
        {
            poke.map((p, idx)=> {
                return(
                    <div key={idx}>
                        <h3>{p.name}</h3>
                    </div>
                )
            })
        }
    </div>
    
  )
}

export default AxiosPokemon