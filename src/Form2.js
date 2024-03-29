import React, { useState } from 'react'

function Form2() {
  const[name, setName] =useState("")
const handle=(event)=>{
  event.preventDefault();
  alert(name);
}

  return (
    <form onSubmit={handle}>
      <label htmlFor="text">Enter text
      <input type="text" id='text' onChange={(val)=>setName(val.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form2
