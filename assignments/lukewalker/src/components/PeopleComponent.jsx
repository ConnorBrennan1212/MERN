import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router';
import axios from 'axios';

const PeopleComponent = () => {

    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((error)=>{
            console.error(error);
            setData({error: "These are not the droids you are looking for"})
        })
    },[id])
    

    return data.error ? (
        <h1>{data.error}</h1>
        ): (
        <div>
            <h1>Star Wars Crew</h1>
            <h3>Name: {data.name}</h3>
            <h3>Height: {data.height}</h3>
            <h3>Mass: {data.mass}</h3>
            <h3>Gender: {data.gender}</h3>
        </div>
    )
}

export default PeopleComponent