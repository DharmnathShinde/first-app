import React from 'react'

function EventHandling() {
const Alert=()=>{
  alert("you clicked on button")
}


  return (
    <div >
      <button onClick={Alert}>Click on </button>
    </div>
  )
}

export default EventHandling
