import React, { useState } from 'react'

const ShoppingListForm = () => {
    const [formData, SetFormData] = useState({product: "" , quantity: 0})

    const handleChange = (evt) => {
        SetFormData(currData=>{
            const fieldName = evt.target.name
            const value = evt.target.value
            return {... currData,
            [fieldName]: value}
        })
    }
  return (
    <div>
      <h1>Product is {formData.product}</h1>
      <h1>quantity is {formData.quantity}</h1>
      <form>
        <label htmlFor='product'>Product:-  </label>
        <input type='text' name="product" placeholder='product' value={formData.product} onChange={handleChange}></input>
        <label htmlFor=''>Quantity:- </label>
        <input type='number' name="quantity" placeholder='quantity' value={formData.quantity} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default ShoppingListForm
