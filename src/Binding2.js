import React, { useState } from 'react'

function Binding2() {
  const[count,setCount]=useState(0);

  
  function increament(){
   setCount(count=count+1)
  }
  return (
   <div>
      <button onClick={increament}>click </button>
      <span>{count}</span>
    </div>
  )
}

export default Binding2
