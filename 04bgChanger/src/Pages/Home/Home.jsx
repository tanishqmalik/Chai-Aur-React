import React from 'react'
import { useState } from 'react';

function Home() {
    const [Color, setColor] = useState("olive")
    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: Color }}
        >

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button className='outline-none px-4 rounded-full'
                    style={{backgroundColor: "red"}}
                    >Red</button>
                </div>
            </div>
        </div>
    )
}

export default Home