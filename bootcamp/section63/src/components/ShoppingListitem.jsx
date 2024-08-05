import React from 'react'

const ShoppingListitem = ({item, quantity, completed }) => {
  return (
    <div>
      <li> {item}-{quantity}</li>
    </div>
  )
}

export default ShoppingListitem
