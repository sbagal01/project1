import React,{useState} from 'react'

       
export default function AddUser({employees,getData}) {
    const [addUser,setUser]=useState({})
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(addUser)
        // alert(addUser);
        //setEmployees([...employees,addUser])
    fetch('http://localhost:4000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addUser),
    }).then((response) => response.json()).then((data) => {console.log('User added:', data);
        setUser({ id: '', employee_name: '',employee_salary:'',employee_age:''});
        getData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
        //employees.push(addUser);
        //setEmployees(employees);
    }
    return (
    <>
      <form  onSubmit={submitHandler} id="addForm">
      <div className="mb-3">
    <label htmlFor="eId" className="form-label">Employee ID</label>
    <input type="number" name={addUser.id} value={addUser.id} className="form-control" onChange={(e)=>{setUser({...addUser,id:e.target.value})}} id="eId" aria-describedby="emailHelp" />
    <div id="emp_id" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="emp_name" className="form-label">Employee Name</label>
    <input type="text" name={addUser.employee_name} value={addUser.employee_name} onChange={(e)=>{setUser({...addUser,employee_name:e.target.value})}} className="form-control" id="emp_name" />
  </div>
  <div className="mb-3">
    <label htmlFor="emp_salary" className="form-label">Employee Salary</label>
    <input type="number" name={addUser.employee_salary} value={addUser.employee_salary} onChange={(e)=>{setUser({...addUser,employee_salary:e.target.value})}} className="form-control" id="emp_salary" />
  </div>
  <div className="mb-3">
    <label htmlFor="emp_age" className="form-label">Employee Age</label>
    <input type="number" name={addUser.employee_age} value={addUser.employee_age} onChange={(e)=>{setUser({...addUser,employee_age:e.target.value})}} className="form-control" id="emp_age" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
