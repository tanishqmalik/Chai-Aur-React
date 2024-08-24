import React, { useState } from 'react'

const ShoppingListForm2 = () => {

    const [formData, Setformdata] = useState({product: "", quantity:0})

    const handleChange =(e)=>{

        Setformdata(currData=>{
            const name= e.target.name 
            const value = e.target.value;
            return {... currData,
            [name]:value}
        })
    }
    
  return (
    <div>
      <div>
        <h1>product is {formData.product} </h1>
        <h1>quantity is {formData.quantity}</h1>
      </div>

      <label htmlFor='product'>Product :- </label>
      <input placeholder='product' id="product" value={formData.product} name='product' onChange={handleChange}></input>
      <label htmlFor=''>Quantity:- </label>
    <input type='number' name="quantity" placeholder='quantity' value={formData.quantity} onChange={handleChange}></input>
    </div>
  )
}

export default ShoppingListForm2
