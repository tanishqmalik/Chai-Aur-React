import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const EmojiClicker = () => {

    function randomemoji(){
        const emojiRandom = ['😞', '😖', '😡' ,'😣','😔','😏'];
        return emojiRandom[Math.floor(Math.random()* emojiRandom.length+1)];
    }

    const [ Emoji , SetEmoji] = useState([{id: uuid(),emoji: randomemoji()}])


    
    const addEmo = ()=>{
        SetEmoji((AddedEmoji)=>
            [...AddedEmoji,  {emoji : randomemoji() , id : uuid() } ]
        )
    }

    const deleteEmoji = ()=>{
        SetEmoji((AddedEmoji)=>{
            [...AddedEmoji, AddedEmoji.remove(randomemoji())]
        })
    }
    
  return (
    <div>
        {Emoji.map((e)=>(
            <span onClick={deleteEmoji} className='text-4xl' key={e.id}>{e.emoji}</span>
        ))}
      <button onClick={addEmo}>add emo </button>
    </div>
  )
}

export default EmojiClicker
