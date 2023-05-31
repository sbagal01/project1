import React,{useState}  from 'react'

export default function FormDemo3() {
    let [user,setUser]=useState({fname:"Sachin", lname:"Tendulkar"})
    let submitHandler=(e)=>{
        e.preventDefault();
        alert(user)
    }
    
    return (
    <div>
        <form onSubmit={submitHandler}>
        First Name :
        <input value={user.fname} onChange={(e)=>{setUser({...user,fname:e.target.value})}} />
        <br/>
        Last Name :
        <input value={user.lname} onChange={(e)=>{setUser({...user,lname:e.target.value})}} />
        <br/>
        State data is : {user.fname+ "" + user.lname}
        <button>Submit</button>
        </form>
 
    </div>
  )
}
