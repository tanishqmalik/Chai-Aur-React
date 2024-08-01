import React from 'react'
import './Home.css'
import { useState } from 'react';

const Home = () => {

    let [Counter, setCounter] = useState(0)


    const addvalue = () => {
        // Counter = Counter + 1;

        // setCounter(Counter=>Counter+2)
        setCounter(Counter=>Counter+1)

    }
    const removevalue = () => {
        // Counter = Counter - 1;
        setCounter(Counter=>Counter-1)
    }
    const reset = () =>{
        Counter=0
        setCounter(Counter)
    }
    return (

        <div className='hello'>
            <h1> Chai Aur React || Add Counter </h1>
            <h2>Counter value: {Counter}</h2>

            <div className='hello2'>
                <button onClick={addvalue}>Add value </button>
                <button onClick={removevalue}>Remove value</button>
                <button onClick={reset}>reset</button>
            </div>

            <p>footer: {Counter}</p>

        </div>

    )
}

export default Home
