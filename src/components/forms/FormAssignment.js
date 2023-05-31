import React,{useState} from 'react'

export default function FormAssignment() {
    let [user,setUser]=useState({});
    let submitHandler=()=>{
        e.preventDefault(); 
        console.log(user);
    }
    return (
    <div>
        <form onSubmit={submitHandler}>
      User ID : 
      <input name={user.id} type="text" value={user.id} onChange={(e)=>{setUser({...user,id:e.target.value})}}/><br/>
      password :  
      <input name={user.password} type="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/><br/>
      Name :
      <input name={user.name}  type="text" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}/><br/>
      Address :
      <input name={user.address} type="text" value={user.address} onChange={(e)=>{setUser({...user,address:e.target.value})}}/><br/>
      ZIp Code :
      <input name={user.zip} type="number" value={user.zip} onChange={(e)=>{setUser({...user,zip:e.target.value})}}/><br/>
      Email :
      <input name={user.email} type="text" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/><br/>
      Country :
      
    Sex : 
    Language :
    About: 
    </form>
    </div>
  )
}
