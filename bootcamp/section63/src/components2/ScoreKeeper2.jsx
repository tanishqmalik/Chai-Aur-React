import React, { useState } from 'react'

const ScoreKeeper2 = ({Players=4, target=3}) => {

    const [scores, setScores] = useState(new Array(Players).fill(0));


    // let [count, setCount]=useState(0);


    const changeNumber = (index) => {
        setScores((prevScores)=>{
            const copy = [...prevScores]
            copy[index] +=1;
            return copy
        })
    }

    const resetToZero = () =>{
        setScores(new Array(Players).fill(0))
    }


  return (
    <div className='flex w-full h-screen items-center justify-center flex-col'>
      {scores.map((score,index)=>(
        <div className='flex gap-5'>
            <h1 key={index}>Person{index+1}:- {score}</h1>
            <button onClick={()=>changeNumber(index)}> +1 </button>
            {score==target && <h2>Winner!</h2>}
        </div>
))}

      <button onClick={resetToZero}>Reset</button>
    </div>
  )
}

export default ScoreKeeper2
