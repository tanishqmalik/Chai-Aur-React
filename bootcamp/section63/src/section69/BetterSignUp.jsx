import React, { useState } from 'react'

const BetterSignUp = () => {
    const [formdata, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    })

    const handleChange = (evt) => {
        const fieldName = evt.target.name
        const value = evt.target.value

        setFormData(currData => {
            // currData[fieldName] = value
            return { ...currData, 
            [fieldName]: value }

        })
    }


    const showChanges = (e) => {
        e.preventDefault()
        console.log(formdata)
    }

    return (
        <div>
            <form>
                <label htmlFor="firstName">Enter Firstname:-  </label>
                <input name="firstName" id="firstName" placeholder='firstName' value={formdata.firstName} onChange={handleChange}></input>
                <label htmlFor="lastname">Enter Lastname:-  </label>
                <input name="lastName" id="lastName" placeholder='lastName' value={formdata.lastName} onChange={handleChange} ></input>
                <button onClick={showChanges}>Submit</button>

                <input name="password" id="password" placeholder='password' type='password' value={formdata.password} onChange={handleChange} ></input>
                <button onClick={showChanges}>Submit</button>
            </form>

        </div>
    )
}

export default BetterSignUp
