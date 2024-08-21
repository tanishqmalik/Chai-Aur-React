import React, { useState } from 'react'
import { getrolls , sumOfAllElem } from './utils'

const Lucky7 = ({boxes} ) => {

  const [Dice , setDice] = useState(getrolls(boxes))

  function roll(){
    setDice(getrolls(boxes))
    console.log(Dice)
  }

  const win = sumOfAllElem(Dice)==7;


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-6'>
        <h1 className='text-4xl'>Lucky7 {win && <h1>You won</h1>}</h1>
      <div className='w-[800px] h-[120px] border border-black rounded-full flex items-center justify-center gap-10'>

        {Dice.map((value,index)=> {
         return <div key = {index} className='w-[100px] h-[90px] border border-zinc-950 bg-green-400'>{value}</div>
        }) }
      </div>

      <button onClick={roll} className='border border-black w-24'>roll again</button>
    </div>
  )
}

export default Lucky7