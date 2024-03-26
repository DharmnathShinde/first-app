import React, { Component } from "react";
import { ReactDOM } from "react";
class Lifecycle extends Component{
  constructor(){
    super()
this.state={
  name:"suraj"
};}
componentDidMount(){
setTimeout(()=>
{
  this.setState({
    name:"shinde"
  })
},4000)
}
render(){ 
return(
<h1>hello {this.state.name}</h1>)
}
}
export default Lifecycle;