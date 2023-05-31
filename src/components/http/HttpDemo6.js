import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function HttpDemo6() {
    const [users,setUsers]=useState([]);
    const getUsers=async function(){
        let response=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data)
        console.log("Response duration is "+ response.durationInMs);
        console.log("Response date is "+ response.currentTime);
    }
    useEffect(()=>{
        getUsers();
    },[])
    return (<>
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
  </>)
}
