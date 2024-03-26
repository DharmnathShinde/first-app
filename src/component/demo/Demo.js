import { render } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
function Demo(props){
  
  return(<>  <img src={props.img} alt="" />;
  <h1>{props.name}</h1>
  <h3><link rel="stylesheet" href={props.link} /></h3>
    </>
  )
}
export default Demo;