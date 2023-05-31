import React from 'react'

export default function ListDemo1() {
  let cars=['tata','hyundai','honda','volkswagen','toyota']
    return (
    <div>
      <h2>Car List</h2>
      <ul>
      {cars.map((car)=>{
            return <li>{car}</li>
        })
    }
    </ul>
      
    </div>
  )
}
