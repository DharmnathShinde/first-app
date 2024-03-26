import React from "react";
import ConditionRender from "./ConditionRender";
import List,{Number} from "./List";
import EventHandling from "./EventHandling";


function App(){
   let age= prompt("enter tour age")
return ( <>
<ConditionRender age={age}/>
<ol>{Number.map((numbe) => <List num={numbe} />)}</ol>
<EventHandling/>
  </>)
}
export default App;
