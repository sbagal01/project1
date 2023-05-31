import React, { Component } from 'react'

export default class RefDemo3 extends Component {
    constructor(props) {
      super(props)
    
      this.myRef1=React.createRef();
      this.myRef2=React.createRef();
    }
    componentDidMount(){
        this.myRef1.current.value=0;
        this.myRef2.current.value=0;
    }
    addition=()=>{
        let val1=parseInt(this.myRef1.current.value);
        let val2=parseInt(this.myRef2.current.value);
        alert(val1+val2)
    }
    render() {
    return (
      <div>
        <input ref={this.myRef1}/><br/>
        <input ref={this.myRef2}/><br/>
        <button onClick={this.addition}>Add</button>
      </div>
    )
  }
}
