import React from "react";
import './Jsx.css'
import ReactDOM from 'react-dom/client';
function Jsx(){
const myElement = <h1 className="tittle">hellow  {4+5} </h1>;

const list = (
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
  </ul>
);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(myElement);

const root2=ReactDOM.createRoot(document.getElementById("root2"))
root2.render(list);



}
export default Jsx;
