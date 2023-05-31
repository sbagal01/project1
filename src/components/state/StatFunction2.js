import React, { Component } from 'react'

export default class StatFunction2 extends Component {
    state={
        count:0,
        name:'abc'
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
    return (
      <div>
        <p>the count is {this.state.count}</p>
        <button onClick={()=>{this.increment()}}>Increment</button>
      </div>
    )
  }
}
