import React from 'react'
import { useState, useCallback } from 'react'

function Home() {



    const [length, setLength] = useState(0)
    const [numYes, setnumYes] = useState(false);
    const [charYes, setcharYes] = useState(false);
    const [pass, setpass] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIGKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz"

        if (numYes) {
            str += "0123456789"
        }
        if (charYes) {
            str += "!@#$%^&*()"
        }

        for (let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length)

            pass = str.charAt(char);
        }

        setpass(pass)

    }, [length, numYes, charYes, setpass])
    return (
        <div className='w-full h-screen  text-center justify-center items-center flex flex-col'>
            <div>
                <h1 className='text-4xl'>Password Generator</h1>
            </div>

            <div className='w-auto h-auto p-4 bg-gray-600 flex justify-center items-center flex-wrap flex-col'>
                <div className='flex gap-4 flex-wrap items-center justify-center'>
                    <input
                        type="text"
                        value={pass}
                        placeholder='password'
                        className='outline-none border border-red-600 rounded-lg text-2xl px-3'>
                    </input>
                    <button className='bg-white px-2 py-2 rounded-lg '>copy</button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e)=>{setLength(e.target.value)}}
                    >
                    </input>
                    <label className='text-white'>Length:{length}</label>
                    <input
                    type="checkbox"
                    defaultChecked={charYes}
                    id="charInput"
                    onChange={()=>{
                        setcharAllowed((prev)=>!prev);
                    }}
                    >
                    </input>
                </div>
            </div>
        </div>
    )
}
export default Home