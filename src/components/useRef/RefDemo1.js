import React, { Component } from 'react'

export default class RefDemo1 extends Component {
    
    addition=()=>{
        let val1=parseInt(this.inputRef1.value);
        let val2=parseInt(this.inputRef2.value);
        alert(val1+val2)
    }
    render() {
    return (
      <div>
        <input ref={(input1)=>this.inputRef1=input1}/><br/>
        <input ref={(input2)=>this.inputRef2=input2}/><br/>
        <button onClick={this.addition}>Add</button>
      </div>
    )
  }
}
