import React, { useState } from 'react'

function Form() {
  const[value, setvalue]=useState("");
  return (
<form action="">
 <input type="text" id='name'onChange={(e)=>setvalue(e.target.value)}/>
 <label htmlFor="name">Enter your Name</label>
 <h1>{value}</h1>
</form>
  )
}

export default Form
