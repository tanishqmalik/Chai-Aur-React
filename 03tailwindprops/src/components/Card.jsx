import React from 'react'
import { me } from '../assets/index'

function Card() {
    return (
        <div id="card" className='mt-[300px] flex '>
            <img className="w-100 h-96" src={me} />
        </div>
    )
}

export default Card
