import React from 'react'

const ShoppingListitem2 = ({item, quantity}) => {
  return (
    <div>
      <ul>
        <li>{item}-{quantity}</li>
      </ul>
    </div>
  )
}

export default ShoppingListitem2