import { render } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
function Demo(props){
  
  return(<>  <img src={props.link} alt="" />;
  <h1>{props.name}</h1>
  <h3>{props.description}</h3>
    </>
  )
}
export default Demo;