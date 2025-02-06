import React, { Component } from 'react'

export default class Cbcs extends Component {
    constructor(){
        super();
        this.state={
            name:"sai vasanth",
        };
    }
    changename=()=>{
        this.setState({
            name:"praharsha"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changename}>change name</button>
      </div>
    )
  }
}
