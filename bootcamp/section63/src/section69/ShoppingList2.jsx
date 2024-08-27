import React, { useState } from 'react'

const ShoppingList2 = () => {

    const [formData, SetformData] = useState([
        {Pname: "hello", quantity:34},
        {Pname:"bye",quantity:90}
    ])


    const[newItem, SetnewItem]= useState({Pname:'', quantity:0});

    const handleClick = (evt)=>{

        SetnewItem(curData=>{
            const Fieldname = evt.target.name
            const value = evt.target.value
            return {...curData, [Fieldname]:value}
        })
    }

    const submitTheForm = (e)=>{
        e.preventDefault();
        const item = {Pname: newItem.Pname , quantity:newItem.quantity}
        SetformData((curData)=>[
            ...curData,item
        ])

        SetnewItem({Pname: '', quantity:''})
    }




  return (
    <div>
        <div>
            <ul>
                {formData.map((item,index)=>{
                    return <li key={index}>{item.Pname}-{item.quantity}</li>
                })}
            </ul>
            
        </div>

      <h1 className='text-4xl'>Product is {newItem.Pname}</h1>
      <h1 className='text-4xl'>Quantity{newItem.quantity}</h1>


      <form onSubmit={submitTheForm}>
        <label htmlFor='Pname'>Product:-  </label>
        <input type='text' name="Pname" placeholder='Pname' value={newItem.Pname} onChange={handleClick}></input>
        <label htmlFor=''>Quantity:- </label>
        <input type='number' name="quantity" placeholder='quantity' value={newItem.quantity} onChange={handleClick} ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ShoppingList2
