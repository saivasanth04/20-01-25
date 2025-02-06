import React, { Component } from 'react'
import './App.css'
export default class Cbcs extends Component {
    constructor(){
        super();
        this.state={
            name:"sai vasanth",
            count:0
        };
    }
    changename=()=>{
        this.setState({
            name:"praharsha",
           
        })
    }
    incre=()=>{
        let count=this.state.count+1
        this.setState({count:count});
    }
    decre=()=>{
        let count=this.state.count-1
        this.setState({count:count})
    }
    reset=()=>{
       
        this.setState({count:0})
    }
  render() {
    return (
      <div >
        {/* <h1>{this.state.name}</h1>
        <button onClick={this.changename}>change name</button> */}
        <h1>{this.state.count}</h1>
        <div className='butt'>
            <button onClick={this.incre}>Increment</button>
            <button onClick={this.decre}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
