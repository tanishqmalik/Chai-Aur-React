import React from 'react'
import ShoppingListitem from "./ShoppingListitem"

const ShoppingList = ({items}) => {
  return (
    <div>
      <ul>
        {/* {items.map((i)=>(
            <li key={i.id} style={{color: i.completed ? "green":"red"}}>
                {i.item} - {i.quantity}
            </li>
        ))} */}

        {items.map((i)=> (
            // <ShoppingListitem key={i.id} item={i.item} quantity={i.quantity} completed={i.completed} />
            <ShoppingListitem key={i.id} {...i} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
