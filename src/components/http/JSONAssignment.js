import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AddUser from './AddUser.js';
export default function JSONAssignment() {
    let [employees,setEmployees]=useState([]);
    async function getData(){
        let url="http://localhost:4000/data"
        let response=await axios.get(url);
        setEmployees(response.data);
    }

    useEffect(()=>{
        getData();
    },[])
    return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
        {
            employees.map((employee)=>{
                return <>
                    <tr key={employee.id}>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.employee_name}</td>
                    <td>{employee.employee_salary}</td>
                    <td>{employee.employee_age}</td>
                    <td><button className="btn btn-info">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                    </td>
                  </tr>
                </>
            })
        }
  </tbody>
</table>
<br/>
<AddUser employees={employees} getData={getData}/>
{/* <AddUser/> */}
    </>
  )
}
