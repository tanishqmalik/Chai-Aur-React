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
                <Card username="Tanishq Malik" date="12 june, 2003" />
                <Card username="hitesh" date="17 June, 2024"/>
                </div>
            </div>
        </>
    )
}

export default Hero