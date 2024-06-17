import React from 'react'
import Card from './Card'

function Hero() {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <div className='relative top-3'>
                    <h1 className='font-bold text-[40px] text-white'>Cards and Props</h1>
                </div>
                <div className='flex gap-20'>
                <Card username="Tanishq Malik" />
                <Card username="hitesh"/>
                </div>
            </div>
        </>
    )
}

export default Hero