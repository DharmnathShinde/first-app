import './App.css';
import React ,{useEffect, useState} from 'react';
function App() {
  const [count,setCount]=useState(1)
  const [color,setColor]=useState("white")
const colors=["black","red","green","purple","gold","yellow"]
  
  function decreament(){
    setCount(prevCount=>prevCount-1)
  }
  function increament(){
    setCount(prevCount=>prevCount+1)
  }

  useEffect(()=>{
   setColor(colors[parseInt((Math.random() * colors.length) + 1)])
  },[count])

  return (
    <div className="App" style={{
      backgroundColor:`${color}`,
    }}>
    <button onClick={decreament}>-</button>
    <span >{count}</span>

    <button onClick={increament}>+</button>
    </div>
  );
}

export default App;
