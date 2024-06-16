import React from 'react'
import {me} from '../assets/index'


function Card() {
  return (
    <>
    <h1 className='fixed '>Cards and Props</h1>
    <div className='w-full h-screen flex justify-center font-bold  text-3xl flex-col items-center'>
      <div id="card">
        <img className="w-52 h-54" src={me}></img>
      </div>
    </div>
    </>
  )
}

export default Card