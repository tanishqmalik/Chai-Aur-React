import React, { useCallback, useState } from 'react'

const InputForm = () => {
    const [username , SetUsername] = useState("")

    const checkifchanged = (e) => {
        console.log("Changed")
        SetUsername(e.target.value)
    }
   
  return (
    <div>
      <form>
        <label htmlForfor="username">Enter username:-  </label>
        <input id="username" placeholder='username' value = {username} onChange={checkifchanged}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputForm
