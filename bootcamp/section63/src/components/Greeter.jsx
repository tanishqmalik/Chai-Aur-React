import React from 'react'

const Greeter = ({person,from="anonymous"}) => {

  return (
    <div>
      <h1>hi there, {person} from {from} !!!</h1>
    </div>
  )
}

export default Greeter
