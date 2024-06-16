import React from 'react'



function Card() {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>

                <div className='relative top-3'>
                    <h1 className='font-bold text-[40px]'>Cards and Props</h1>
                </div>
                <Card />
            </div>
        </>
    )
}

export default Card