import React from 'react'
import PropertyListitem from "./PropertyListitem"
import { useState } from 'react'
const PropertyList = ({ properties }) => {

    let [Content, setContent]= useState(0)


    const add= (Content) => {
        setContent(Content=>Content+1);
    }
    const reset = (Content)=>{
        // Content=0
        setContent(Content=0)
    }



    return (
        //prop drilling
        // <div style={{display:'flex', gap: '18px', alignItems: 'center', justifyContent: 'center'}}>
        //     {properties.map((p)=>(
        //         <PropertyListitem key={p.id}  name={p.name} rating = {p.rating} price ={p.price}  />
        //     ))}
        // </div>

        <div style={{ display: 'flex' }}>
            {/* directly apllying */}

            {properties.map((p) => (
                <div key={p.id}>
                    <h1>{p.name}</h1>
                    <h2>{p.price} a night</h2>
                    <h3>{p.rating}⭐️</h3>
                </div>
            ))}

            <button onClick={add}>click me</button>
            <button onClick={reset}>reset</button>
            <h1>{Content}</h1>


        </div>
    )
}

export default PropertyList
