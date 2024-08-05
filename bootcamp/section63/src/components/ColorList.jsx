import React from 'react'

const ColorList = ({colors}) => {
    const elements = [<p>Hello</p>, <h1>Bye!</h1>,<input type="password"/>]
    const list = colors.map(c => <li style={{color: c}}>{c}</li>)
  return (
    <div>
       <p>Color List</p>
       <p>{colors}</p>
       {elements}
       {list}
    </div>
  )
}

export default ColorList
