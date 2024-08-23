import { Button } from 'bootstrap'
import React, { useState } from 'react'

const BetterSignUp2 = () => {

    const [formdata, Setformdata] = useState({
        firstName: "",
        lastName: "",
        password:""
    })


    const handleChange =(e)=>{
        var NewName = e.target.name
        var value = e.target.value

        Setformdata(currdata=>{
            return {...currdata,
            [NewName]:value}
        })
    }


    const ShowChanges = (e)=>{
        e.preventDefault()
        console.log(formdata);
    }
  return (
    <div>
      <form onSubmit={ShowChanges}>
        <label>Enter firstName</label>
        <input className="pl-2 bg-slate-200" name="firstName" type='text' placeholder='firstName' value={formdata.firstName} onChange={handleChange} ></input>
        <label>Enter lastName</label>
        <input className="pl-2 bg-slate-200" name="lastName" type='text' placeholder='lastName' value={formdata.lastName} onChange={handleChange}></input>
        <label>Enter password</label>
        <input className="pl-2 bg-slate-200" name="password" type='password' placeholder='password' value={formdata.password} onChange={handleChange}></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default BetterSignUp2
