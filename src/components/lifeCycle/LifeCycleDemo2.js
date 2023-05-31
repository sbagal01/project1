import React, { Component } from 'react'
import LifeCycleDemo3 from './LifeCycleDemo3';
export default class LifeCycleDemo2 extends Component {
  state={
    flag:true
  }
    render() {
    return (<>
        <h3>This is LifeCycle 2</h3>
        <button onClick={()=>{this.setState({flag:! this.state.flag})}}>Toggle</button>
        {this.state.flag?<LifeCycleDemo3/>:null}
        
    </>


    )
  }
}
