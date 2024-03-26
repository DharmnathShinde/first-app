import { render } from "@testing-library/react";
import React from "react";
function Car(props){
  return(
  <h1>car name {props.name}</h1>
  )
}
export default Car;