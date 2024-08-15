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

    function deleteEmoji(id){
        SetEmoji(prevEmoji =>{
            return prevEmoji.filter(e=> e.id!==id)
        })
    }

    const ChangeEvery = ()=>{
        SetEmoji(ChangeEmo =>{
            return ChangeEmo.map((e)=>{
                return { ...e , emoji: '❤️'}
            })
        })
    }


    
  return (
    <div>
        {Emoji.map((e)=>(
            <span onClick={() => deleteEmoji(e.id)} className='text-4xl cursor-pointer' key={e.id}>{e.emoji}</span>
        ))}
      <button onClick={addEmo}>addEmo </button>
      <br />    
      <button onClick={ChangeEvery}>changeEveryEmo</button>
    </div>
  )
}

export default EmojiClicker
