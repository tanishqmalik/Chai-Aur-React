import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount]= useState(0)

    const changeNumber = ()=>{
        setCount(Count=>Count+1)
    }
    const changeNumberThree = ()=>{
        setCount(Counter => Counter+1);
        console.log(Count)
        setCount(Count => Count+1);
        setCount(Count => Count+1);
    }
  return (
    <div>
      <h1>Count : - {Count}</h1>
      <button onClick={changeNumber} className='cursor-pointer w-11 h-11'>+1</button>
      <button onClick={changeNumberThree} className='cursor-pointer w-11 h-11'>+3</button>
    </div>
  )
}

export default Counter