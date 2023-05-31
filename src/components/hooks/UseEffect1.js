import React,{useState,useEffect} from 'react'

export default function UseEffect1() {
  let [userId,setUserId]=useState(1);
  let [user,setUser]=useState({
    name:"",
    email:""
  });
  let [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('Use Effect');
        async function fetchData(){
            let response =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            let data=await response.json();
            setUser({...data});
        }
        fetchData();
        return (()=>{
          console.log('Use Effect called while Unmounting')
        }
          
        )
    },[userId])

    return (
        <>
        <h2 className="text-center">This is useEffect Demo</h2>
        <div>Count is {count}</div>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>
        <button onClick={()=>{
            setUserId(userId+1)
        }}>Increment User Id</button>
<div className="card col-sm-3">
    <img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" alt="Card-image" className="card-img-top" width='100' height='100'/>
  <div className="card-body">
    <p className="card-text">
        {user.name}
    </p>
    <p className="card-text">
        {user.email}
        </p>
  </div>
</div>
</>
  )
}
