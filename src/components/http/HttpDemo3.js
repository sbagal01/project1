import React,{useState,useEffect} from 'react';
import client from './Client.js';

export default function HttpDemo3() {
    const [users,setUsers]=useState([]);
    const getUsers=async function(){
        let response=await client.get('/users');
        setUsers(response.data)
        console.log("Response duration is "+ response.durationInMs);
    }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    
        <div>
          <h3>HTTP Demo3</h3>
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
