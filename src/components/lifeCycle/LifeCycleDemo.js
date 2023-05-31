import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Saurabh",
       users:[]
    }
    console.log('Constructor...');
  }
  static getDerivedStateFromProps(props,state){
    console.log('GetDerivedStateFromProps');
    
  }
  fetchUsers=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let userData=await response.json();
    this.setState({users:userData})
  }
  shouldComponentUpdate(){
    console.log('Should COmponent Update');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById("div1").innerHTML="Before the update, the name was "+prevState.name;
  }
  componentDidUpdate(){
    document.getElementById("div2").innerHTML="After the update, the name is "+this.state.name;
  }
  componentDidMount(){
    console.log('ComponentDidMount');
    document.getElementById("div1").style.color="red";
    this.fetchUsers();
  }
    render() {
        console.log('Render...')
    return (
      <div className="border card">
    <div id="div1"></div> 
    <div id="div2"></div>  
    <button onClick={()=>{
        this.setState({name:"Deepak"})
    }} className="btn btn-primary btn-sm">Update me</button>
    <hr/> 
        <ul>
            {
                this.state.users.map((user)=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    </div>
    )
  }
}
