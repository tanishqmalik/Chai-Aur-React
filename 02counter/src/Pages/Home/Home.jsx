import React from 'react'
import './Home.css'
import { useState } from 'react';

const Home = () => {

    let [Counter, setCounter] = useState(0)


    // let Counter= 0;

    const addvalue = () => {
        Counter = Counter + 1;
        setCounter(Counter)
    }
    const removevalue = () => {
        Counter = Counter - 1;
        setCounter(Counter)
    }
    return (

        <div className='hello'>
            <h1> Chai Aur React || Add Counter </h1>
            <h2>Counter value: {Counter}</h2>

            <div className='hello2'>
                <button onClick={addvalue}>Add value </button>
                <button onClick={removevalue}>Remove value</button>
            </div>

            <p>footer: {Counter}</p>

        </div>

    )
}

export default Home
