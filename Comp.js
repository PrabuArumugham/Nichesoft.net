import React from "react";

import "./styles.css";
var value=0;
export default class Comp extends React.Component {
  constructor(props){
    super(props)
    this.state={Ccount:0}
    
  }
  increment=()=>{
    this.setState({Ccount:this.state.Ccount+1});
   
   }
   componentDidUpdate(){
    value=this.props.count+this.state.Ccount;
   }
  
  render(){
  return (<div>
   
     Count value {this.state.Ccount}
  <button onClick={this.increment}>click</button>
  <button onClick={()=>this.setState({Ccount:0})}>Reset</button><br></br>

  Totel Click:{value+1}
 
    </div>
  )
}
}