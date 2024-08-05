// import { useState } from 'react'
import './App.css'
import Greeter from './components/Greeter'
import Die from './components/Die'
import ListPicker from './components/ListPicker'
import DoubleDice from './components/DoubleDice'
import ColorList from './components/ColorList'
import SlotMachineExer from './components/SlotMachineExer'
import ShoppingList from './components/ShoppingList'
import PropertyList from './components/PropertyList'

function App() {
  // const [count, setCount] = useState(0)


  const data= [
    {
      id: 1,
      item:"eggs",
      quantity: 12,
      completed: false
    },
    {
      id: 2,
      item:"milk",
      quantity: 1,
      completed: true
    },
    {
      id: 3,
      item:"chicken breasts",
      quantity: 4,
      completed: false
    },
    {
      id: 4,
      item:"carrots",
      quantity: 6,
      completed: true
    },
    
  ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];


  return (
    <>
    {/* <Greeter person="Bill" from="colt"/>
    <Greeter person="Tanishq"/>
    <Greeter person="Shivansh" from="Elton"/>
    <Die numsSides={20}/>
    <Die numsSides={6}/>
    <Die numsSides={10}/>
    <ListPicker values={[1,2,3,]}/>  // same u can pass string array "a","b","c" */}
    {/* <DoubleDice input={4} />
    <DoubleDice input={4} />
    <DoubleDice input={4} /> */}

    {/* <ColorList colors={["red", "pink", "purple", "teal"]}/> */}

    {/* <SlotMachineExer val1="g" val2 ="e" val3="e" />
    <SlotMachineExer val1="e" val2 ="e" val3="e" /> */}
    {/* <SlotMachineExer val1="r" val2="r" val3="r"/> */}

    {/* <ShoppingList items={data}/> */}
    {/* <PropertyList properties={properties}/> */}
    </>
  )
}

export default App
