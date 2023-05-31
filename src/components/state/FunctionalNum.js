import React,{useState} from 'react'

export default function FunctionalNum() {
    let [num1,setNum1]=useState(0);
    let [num2,setNum2]=useState(0)
    // const changeHandler1=(e)=>{
    //     setNum1(e.target.value);
    // }
    // const changeHandler2=(e)=>{
    //     setNum2(e.target.value);
    // }

    // const changeHandler=(e)=>{
    //     if(e.target.name==='num1'){
    //         setNum1(e.target.value);
    //     }else{
    //         setNum2(e.target.value);
    //     }
    // }

    return (
    <div>
      <input type="number" name="num1" onChange={(e)=>{setNum1(e.target.value)}}></input>
      <input type="number" name="num2" onChange={(e)=>{setNum2(e.target.value)}}></input>
      <p>Addition of num1 and num2 is {+num1+ +num2}</p>
    </div>
  )
}
