import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='font-bold text-2xl bg-amber-300 '>Currency App With Chai</h1>
    <InputBox/>
    </>
  )
}

export default App
