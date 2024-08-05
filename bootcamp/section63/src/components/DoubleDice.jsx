import React from 'react'

const DoubleDice = ({ input }) => {

    const num1 = Math.floor(Math.random() * input) + 1;
    const num2 = Math.floor(Math.random() * input) + 1;


    const styles = {color:num1===num2 ? "green" : "red"};

    // const result = num1===num2 ? "You Win" : "You Lose"
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
        <div style={styles}>
            <h1>the first head : {num1}</h1>
            <h1>the second head: {num2}</h1>

            {num1===num2 && <h3>you win</h3>}
            {num1!==num2 && <h3>you lose</h3>}
        </div>
    )
}

export default DoubleDice
