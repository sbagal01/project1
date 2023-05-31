import React from 'react'

export default function ListDemo3() {
    let employees = [
        { eId: 101, name: "sanjay", sal: 5000 },
        { eId: 104, name: "deepak", sal: 8000 },
        { eId: 103, name: "ranjan", sal: 7000 },
        { eId: 102, name: "manoj", sal: 9000 }
    ]
//     return (<>
//         <h2 className="text-center">Employee List</h2>
//         <table className="table table-bordered table-stripped">
//             <thead>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Salary</th>
//             </thead>
//             <tbody>
//                 {
//                     employees.map((emp,ind)=>{
//                         return (<tr key={ind}>
//                              <td>{emp.eId}</td> 
//                              <td>{emp.name}</td> 
//                              <td>{emp.sal}</td>   
//                         </tr>)
//                     })
//                 }
//             </tbody>
//         </table>
//         </>
//   )
    return (
        <table className="table table-bordered table-stripped">
            <thead>

                <tr>
                    {Object.keys(employees[0]).map((emp,i)=>{
                        return (
                            <th key={i}>{emp}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp,ind)=>{
                        return (
                            <tr key={ind}>{Object.keys(emp).map((key)=>{
                                return (
                                    <td key={key}>{emp[key]}</td>
                                )
                            })}</tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    )
}
