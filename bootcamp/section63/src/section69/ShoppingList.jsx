import React, { useState } from 'react'

const ShoppingList = () => {
    const [formData, SetFormData] = useState([
        {product: "onion" , quantity: 2},
        {product:"tomato", quantity: 4},
    ])


    const [newItem, SetnewItem] = useState({product: '', quantity:'' })

    const handleChange = (evt) => {
        SetnewItem(currData=>{
            const fieldName = evt.target.name
            const value = evt.target.value
            return {... currData,
            [fieldName]: value}
        })
    }


    const addItem = (e) =>{
        e.preventDefault()
        const Item = {product : newItem.product, quantity: newItem.quantity}
        SetFormData((currData)=>[
            ...currData,
            Item
        ])

        SetnewItem({product: '', quantity:''})

    }
  return (
    <div>
        <div> 
            <h1 className='text-4xl'>Shopping List</h1>
            <ul>
                {formData.map((item,index)=>(
                    <li key={index}>{item.product}-{item.quantity}</li>
                ))}
            </ul>
        </div>

      <h1>Product is {newItem.product}</h1>
      <h1>quantity is {newItem.quantity}</h1>
      <form onSubmit={addItem}>
        <label htmlFor='product'>Product:-  </label>
        <input type='text' name="product" placeholder='product' value={newItem.product} onChange={handleChange}></input>
        <label htmlFor='quantity'>Quantity:- </label>
        <input type='number' name="quantity" placeholder='quantity' value={newItem.quantity} onChange={handleChange}></input>


        <button>Submit</button>
      </form>
    </div>
  )
}

export default ShoppingList