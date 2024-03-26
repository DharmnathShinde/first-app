import React from "react"; 
import Msg from "./Msg";
function Welcome()
{  let date=new Date()
  let time = date.getHours();
  console.log(time)
  if(time > 1 && time < 12){
    return( <Msg name="Morning"/>)
   
  }

  else if(time >12 && time < 17){
    return( <Msg name="afternoon"/>)
  }

  else if(time >= 16 && time <= 20)
  {
    return(<Msg name="evening"/>)
  }

  else{
    return(<Msg name="night"/>)
  }
  ;
  
}
export default Welcome; 