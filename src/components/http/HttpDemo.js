import React,{useState,useEffect} from 'react'

export default function HttpDemo() {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>setUsers(data)).catch((err)=>console.log(err))
    },[]);
    return (
    <div>
      <h3>HTTP Demo1</h3>
      <table className="table table-striped table-bordered table-hovered">
        <tbody>
            {
                users.map((user)=>{
                    return (
                        <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.address.city}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
