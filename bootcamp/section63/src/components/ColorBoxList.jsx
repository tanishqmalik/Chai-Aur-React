import React, { useState } from 'react'


const ColorBoxList = ({colors}) => {

    const randomNumber = Math.floor(Math.random()*colors.length)

    const [color, SetColor]= useState(colors[randomNumber])

    function colorChange(){
       var newcolor = colors[Math.floor(Math.random() * colors.length)];
       SetColor(newcolor);
    }
    
    
  return (
    <div style={{backgroundColor: `${color}`}} onClick={colorChange}  className='w-[90px] h-[90px] border cursor-pointer text-black'>
        
    </div>
  )
}

export default ColorBoxList
