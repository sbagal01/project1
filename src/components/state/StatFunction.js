import React,{useState,useEffect} from 'react'

export default function StatFunction() {
  let [count,setCount]=useState(0);
  let [name,updateName]=useState('Saurabh')
  const increment=()=>{
    setCount(count+1);
    updateName('Saurabh Bagal');
  }
  useEffect(()=>{
    console.log('Use effect Worked')
})
    return (
    <div>
      <p>Count is {count}</p>
      <p>name is {name}</p>
      <button onClick={()=>increment()}>Increment</button>
    </div>
  )
}
