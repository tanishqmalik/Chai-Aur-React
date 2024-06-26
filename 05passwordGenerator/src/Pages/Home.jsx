import React from 'react'
import { useState, useCallback,useEffect,useRef  } from 'react'

function Home() {



    const [length, setLength] = useState(6)
    const [numYes, setnumYes] = useState(false);
    const [charYes, setcharYes] = useState(false);
    const [pass, setpass] = useState("");

    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIGKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz"

        if (numYes) {
            str += "0123456789"
        }
        if (charYes) {
            str += "!@#$%^&*()"
        }

        for (let i = 1; i <= length; i++) {
            let hello = Math.floor(Math.random() * str.length+1)

            pass += str.charAt(hello)
        }

        setpass(pass)

    }, [length, numYes, charYes, setpass])

    const copyPassToClip = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(pass)
    },[pass] )

    useEffect(()=>{
        passwordGenerator()
    }, [length,numYes, charYes, passwordGenerator])


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
                        readOnly
                        ref={passwordRef}
                        className='outline-none border border-red-600 rounded-lg text-2xl px-3'>
                    </input>
                    <button onClick={copyPassToClip()} className='bg-white px-2 py-2 rounded-lg '>copy</button>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <input
                        type="range"
                        min={6}
                        max={15}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => { setLength(e.target.value) }}
                    >
                    </input>
                    <label className='text-white'>Length:{length}</label>
                    <input
                        type="checkbox"
                        defaultChecked={numYes}
                        id="numinput"
                        onChange={() => {
                            setnumYes((prev) => !prev);
                        }}
                    >
                    </input>
                    <label className='text-white'>Numbers</label>
                    <input
                        type="checkbox"
                        defaultChecked={charYes}
                        id="charinput"
                        onChange={() => {
                            setcharYes((prev) => !prev);
                        }}
                    >
                    </input>
                    <label className='text-white'>Characters</label>
                </div>
            </div>

            {/* <button onClick={passwordGenerator()} className='bg-black text-white px-2 py-2 rounded-full my-2'>click me baby</button> */}
        </div>
    )
}
export default Home