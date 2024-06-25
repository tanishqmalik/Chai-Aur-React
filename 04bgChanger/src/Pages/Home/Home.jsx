import React from 'react'
import { useState } from 'react';

function Home() {
    const [Color, setColor] = useState("olive")

    // const settingColor =()=>{
    //     const Color = backgroundColor.innerHTML
    //     setColor(Color)
    // }
    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: Color }}
        >

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={()=>{setColor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "red" }}
                    >Red</button>

                    <button onClick={()=>{setColor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "blue" }}
                    >Red</button>

                    <button onClick={()=>{setColor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "green" }}
                    >Red</button>

                    <button onClick={()=>{setColor("white")}} className=' border border-zinc-900 px-4 rounded-full text-black shadow-lg'
                        style={{ backgroundColor: "white" }}
                    >Red</button>
                </div>
            </div>
        </div>
    )
}

export default Home