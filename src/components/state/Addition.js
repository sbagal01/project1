import React,{useState} from 'react'

export default function Addition() {
    let [val1,setVal1]=useState(0);
    let [val2,setVal2]=useState(0);
    let [sum,setSum]=useState(0);
    const updateVal1=(e)=>{
        setVal1(+e.target.value);
    }
    const updateVal2=(e)=>{
        setVal2(+e.target.value);
    }
    const addi=()=>{
        setSum(val1+val2); 
    }
    return (
    <div>
      <input type="number" onChange={(e)=>{updateVal1(e)}}></input>
      <input type="number" onChange={(e)=>{updateVal2(e)}}></input>
      <button onClick={()=>addi()}>Addition</button>
      <p>Result is {sum}</p>
    </div>
  )
}
