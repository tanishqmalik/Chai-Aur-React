import React from 'react'
import ShoppingListitem2 from './ShoppingListitem2'

const ShoppingList2 = ({items}) => {
  return (
    <div>
        <ul>
        {items.map((i)=>(
            // <li style={{color: !i.completed? "red" :"green"}}>
            //     {i.item}-{i.quantity}
            // </li>
            <ShoppingListitem2 item={i.item} quantity={i.quantity}/>
        ))}
        </ul>
    </div>
  )
}

export default ShoppingList2


