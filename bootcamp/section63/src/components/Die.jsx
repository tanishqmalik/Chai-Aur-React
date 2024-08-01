import React from 'react'

const Die = ({numsSides}) => {
    const roll = Math.floor(Math.random()*numsSides+1)
  return (
    <div>
      <p>{numsSides}--Die roll {roll}</p>
    </div>
  )
}

export default Die
