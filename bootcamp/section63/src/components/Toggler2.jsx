import React, { useState } from 'react'

const Toggler2 = ({number}) => {

    const [Emoji, setEmoji]= useState(true)

    const [players, SetPlayers] = useState(new Array(number).fill('hello'))

    const EmojiChange = () => {
        setEmoji(!Emoji)
    }
    
  return (
    <div>
      <h1 onClick={EmojiChange}>{!Emoji ? '😀' : '😡'}</h1>
      <h1>{players}</h1>
    </div>
  )
}

export default Toggler2
