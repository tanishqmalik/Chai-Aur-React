import React from 'react'

const SlotMachineExer2 = ({val1, val2, val3}) => {
    const isWinner = val1===val2 && val1===val3

    const styles= {color:isWinner? "green" : "red"}

    const list = [<h1 style={styles}>You win</h1>, <h2>congrats !!!</h2>]

  return (
    <div>
      <h1>{val1} {val2} {val3}</h1>
      {isWinner && list}
      {!isWinner && <h1 style={styles}>You loose</h1>}
    </div>
  )
}

export default SlotMachineExer2
