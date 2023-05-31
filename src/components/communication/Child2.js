import React,{useState} from 'react'

export default function Child2({setName}) {
  const [a,setA]=useState(10)
    return (
    <div>
      <div>My own data is {a}</div>
      <button onClick={()=>{setName('Rahul')}}>Update</button>
    </div>
  )
}
