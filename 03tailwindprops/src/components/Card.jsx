import React from 'react'
import { me } from '../assets/index'

function Card({username}) {
    // console.log("props", props)
    return (
        <div id="card" className='mt-[300px] flex relative'>
            <img className="w-100 h-[452px] relative shadow-emerald-400" src={me} />
            <div className='absolute text-white bottom-0 p-2'>
                <h1 className='font-bold text-[30px] w-auto pb-12 relative'>{username}</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, impedit ipsum, eos eligendi quia sed quis quaerat
                    reprehenderit saepe, dicta aspernatur hic repudiandae expedita ratione nulla debitis corrupti rerum reiciendis.</p>
                <p className='relative bottom-4 pt-8'>17 June, 2024</p>
            </div>
        </div>
    )
}

export default Card