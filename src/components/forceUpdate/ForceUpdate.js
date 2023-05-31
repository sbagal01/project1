import React, { Component } from 'react'

export default class ForceUpdate extends Component {
    count=0;
    increment=()=>{
        this.count=this.count+1;
        this.forceUpdate();
        console.log(this.count);
    }
    render() {
    return (
      <div>
        <p>The count is {this.count}</p>
        <button onClick={()=>{this.increment()}}>Add one</button>
      </div>
    )
  }
}
