import React, { useState } from "react";
import "./styles.css";
import Comp from "./Comp";

export default class App extends React.Component {
  constructor(props){
    super(props)
this.state={count:0,totel:0}
  }
  increment=()=>{
   this.setState({count:this.state.count+1});
   //this.state.totel +=this.state.count+this.props.Ccount
  }
  resetAll=()=>{
    this.setState({count:0});
   // this.props.setState({this.state.Ccount:0})
  }
  render(){
  return (
    <div className="App">
     
     Count value {this.state.count}
  <button onClick={this.increment}>click</button>
  <button onClick={()=>this.setState({count:0})}>Reset</button>
    
    <Comp count={this.state.count}/>
    <button onClick={this.resetAll} >Reset All</button> 
     </div>
  );
  }
}
