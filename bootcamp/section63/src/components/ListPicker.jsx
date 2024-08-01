import React from 'react'

const ListPicker = ({values}) => {
    const randomIndex= Math.floor(Math.random() * values.length)
    const randElement = values[randomIndex];
  return (
    <div>
       <p>the list of: {values} </p>
       <p>Random elem is : {randElement}</p>
    </div>
  )
}

export default ListPicker
