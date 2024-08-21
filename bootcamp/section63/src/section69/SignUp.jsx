import React, { useCallback, useState } from 'react'

const SignUp = () => {
    const [FirstName , SetFirstName] = useState("")
    const [Lastname, SetLastName] = useState("")

    const FirstNameUpdated = (e) => {
        SetFirstName(e.target.value)
    }
    const LastNameUpdated = (e) => {
        SetLastName(e.target.value)
    }

    const ShowName = (event) =>{
        event.preventDefault()
        console.log(FirstName, Lastname)
    }
   
  return (
    <div>
      <form>
        <label htmlFor="firstname">Enter Firstname:-  </label>
        <input id="firstname" placeholder='firstname' value = {FirstName} onChange={FirstNameUpdated}></input>
        <label htmlFor="lastname">Enter Lastname:-  </label>
        <input id="lastname" placeholder='lastname' value = {Lastname} onChange={LastNameUpdated}></input>
        <button onClick={ShowName}>Submit</button>
      </form>
    </div>
  )
}

export default SignUp