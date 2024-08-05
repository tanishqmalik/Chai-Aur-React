import React from 'react'

const SlotMachineExer = ({val1,val2,val3 }) => {
    const isWinner = val1===val2 && val1===val3
    // const notWinner = ()=>{
    //     val1!==val2!==val3
    // }
    const styles= {color:isWinner ? "green": "red"}
    const list = [<h1 style={styles}>you win </h1>, <h2>congrats</h2>]


    // const hello = ()=> {
    //     va11===val2
    // }
  return (
    <div>
        <h1>{val1} {val2} {val3}</h1>
        {isWinner && list}
        {!isWinner && <h1 style={styles}>you lose</h1>}
    </div>
  )
}

export default SlotMachineExer