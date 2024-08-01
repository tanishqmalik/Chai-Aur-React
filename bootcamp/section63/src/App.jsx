// import { useState } from 'react'
import './App.css'
import Greeter from './components/Greeter'
import Die from './components/Die'
import ListPicker from './components/ListPicker'
import DoubleDice from './components/DoubleDice'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Greeter person="Bill" from="colt"/>
    <Greeter person="Tanishq"/>
    <Greeter person="Shivansh" from="Elton"/>
    <Die numsSides={20}/>
    <Die numsSides={6}/>
    <Die numsSides={10}/>
    <ListPicker values={[1,2,3,]}/>  // same u can pass string array "a","b","c" */}
    {/* <ListPicker values={{id:1 , name:"tanishq"}}/> */}
    <DoubleDice input={4} />

    <DoubleDice input={4} />

    <DoubleDice input={4} />
    </>
  )
}

export default App
