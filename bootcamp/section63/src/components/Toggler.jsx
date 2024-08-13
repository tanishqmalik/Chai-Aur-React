import React from 'react'
import './Toggler.css'
import { useState } from 'react'

const Toggler = () => {
    let [Emoji , setEmoji]= useState(true)

    let [Count, SetCount]= useState(0)

    const emojiChange = ()=>{
        setEmoji(!Emoji)
    }

    const increment = ()=>{
        SetCount(Count=Count+1);
    }



  return (
    <div>
      <h1 onClick={emojiChange}>{!Emoji ? '😡' :'😀' }</h1>
      <h1>{Count}</h1>
      <button onClick={increment}></button>
    </div>
  )
}

export default Toggler
