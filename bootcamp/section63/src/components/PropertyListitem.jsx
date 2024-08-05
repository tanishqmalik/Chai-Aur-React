import React from 'react'

const PropertyListitem = ({name,rating,price}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price} a night</h2>
      <h3>{rating}⭐️</h3>
    </div>
  )
}

export default PropertyListitem
