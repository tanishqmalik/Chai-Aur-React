import React from 'react'

const DoubleDice = ({ input }) => {

    const num1 = Math.floor(Math.random() * input) + 1;
    const num2 = Math.floor(Math.random() * input) + 1;

    const result = num1===num2 ? "You Win" : "You Lose"
    // if (num1 === num2) {
    //     return (<>
    //         <h1>Hurray !! ... number Matched </h1>
    //         <h1>The first Dice is At : {num1}</h1>
    //         <h1>The Second Dice is At: {num2}</h1>

    //         
    //     </>
    //     )
    // }

   

    return (
        <div>
            <h1>The first Dice is At : {num1}</h1>
            <h1>The Second Dice is At: {num2}</h1>
            <h2>{result}</h2>
            
            {num1===num2 && <h3>You win</h3>}
            {num1!==num2 && <h3>You lose</h3>}

        </div>
    )
}

export default DoubleDice
