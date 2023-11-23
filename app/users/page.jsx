"use client"
import React, { useState } from 'react'




export default function page() {

  

  const [input, setInput] = useState({
    name : "",
    email : "",
    call : "",
    gender : "",
    photo : ""
  })

  // handle input fields
  const handleInputs = (e) =>{
    setInput((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
  }))
  }

  // handle submit function
  const handleForm = (e) =>{
    e.preventDefault()
  }
  
  return (
    <div>
      <div className="contact-form">
        <form action="" onSubmit={handleForm}>
          <input type="text" name="name" placeholder='Name' value={input.name} onChange={handleInputs}/>
          <input type="text" name="email" placeholder='Email' value={input.email} onChange={handleInputs}/>
          <input type="text" name="call" placeholder='Call' value={input.call} onChange={handleInputs}/>
          <input type="text" name="photo" placeholder='Use photo url*' value={input.photo} onChange={handleInputs}/>
          <input type="radio" name="gender" value="Male" onChange={handleInputs}/>Male
          <input type="radio" name="gender" value="Female" onChange={handleInputs}/>Female
          <button type='submit'>Add user</button>
        </form>
      </div>
    </div>
  )
}
