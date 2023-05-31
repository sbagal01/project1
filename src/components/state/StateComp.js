import React, { Component } from 'react'

export default class StateComp extends Component {
    state={
        count:0,
        name:'Sachin',
        users:{
            state:'MH'
        }
    }
    render() {
        const increment=()=>{
            this.setState({count: this.state.count+1});
        }
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={()=>{increment()}}>Increment</button>
      </div>
    )
  }
}
