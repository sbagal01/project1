import React,{useState,useEffect} from 'react'

export default function UseEffect2() {
    const [a,setA]=useState(10);
    const [b,setB]=useState(20);
    const [c,setC]=useState(30);

    let arr=[a,b];
    useEffect(()=>{
        console.log('UseEffect called.')
    },arr)
    console.log('Render');
        return (
    <div>
        <div>This is UseEffect Demo
        <div>a is {a}</div>
        <div>b is {b}</div>
        <div>c is {c}</div>
        <button onClick={()=>{setA(a+1)}}>Button A</button>
        <button onClick={()=>{setB(b+1)}}>Button B</button>
        <button onClick={()=>{setC(c+1)}}>Button C</button>
        </div> 
    </div>
  )
}
