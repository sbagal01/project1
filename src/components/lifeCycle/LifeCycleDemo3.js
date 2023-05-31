import React, { Component } from 'react'

export default class LifeCycleDemo3 extends Component {
    intervalId=0;
    componentDidMount=()=>{
        //this.intervalId=setInterval(console.log,1000,"Hi")
          this.intervalId =setInterval(()=>{
            document.getElementById("myTime").innerText=new Date().toLocaleTimeString();
          },1000) 
    }
    
    render() {
        
        console.log('Render')
    return (<>
      <div>
        This is Lifecycle Component-3
      </div>
      <h3>Current time is : <span id="myTime"></span></h3>
      </>
    )
  }
  componentWillUnmount(){
    console.log('Component Will Unmount');
    clearInterval(this.intervalId);
}
}
