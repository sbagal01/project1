import React,{useState} from 'react'
import SearchBar from "react-js-search";
export default function SearchBarUsage() {
    const initialEmployees = [
        { number: 12, name: "Buffon", position: "ST", success: true },
        { number: 21, name: "Pirlo", position: "MC", success: false },
        { number: 10, name: "Ruiz", position: "MDI" },
        { number: 7, name: "Nesta", position: "RB", success: true },
        { number: 4, name: "Cannavaro", position: "CB" },
        { number: 2, name: "Puyol", position: "CB", success: false },
        { number: 15, name: "Abate", position: "LB" },
        { number: 16, name: "Locatelli", position: "MDI" },
        { number: 1, name: "Buffons", position: "GK" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 10, name: "Ruiz", position: "MDI" },
        { number: 7, name: "Nesta", position: "RB" },
      ];
      const [employees,setEmployees]=useState(initialEmployees);
      const [filteredEmployees,setFilteredEmployees]=useState(initialEmployees);
      const onSearchClick=(searchText)=>{
        setFilteredEmployees(
        initialEmployees.filter((emp)=>
            JSON.stringify(emp).includes(searchText)
        ))
      }
      const onSearchChangeText=(searchText,filteredData)=>{
        setFilteredEmployees(filteredData);
      }
      return (
    <div>
      <SearchBar onSearchTextChange={onSearchChangeText} onSearchButtonClick={onSearchClick} placeHolderText={"Search here..."} data={initialEmployees}
      />
      <hr/>
      {
       <table  className="table table-stripped table-bordered">
        <tbody>
          {
            filteredEmployees.map((emp,ind)=>{
              return (<tr key={ind}>
                <td>{emp.number}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
              </tr>)
            })
          }
        </tbody>
       </table>
      }
    </div>
  )
}
