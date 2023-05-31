import React,{useState,useMemo} from 'react';

const f2=function(name){
console.log('F2 called');
return name;
}

export default function UseMemoDemo() {
    const [a,setA]=useState(10)
    const [b,setB]=useState(20)

    const f1=function(){
        console.log('I am f1...');
    }
    const myName=useMemo(()=>{
        f2('Sanjay')
    },[b])

    return <div>
        
      <div>A value is {a}</div>
      <div> My name is: {myName}</div>
      <button onClick={()=>{setA(a+1)}}>Update A</button>
      <button onClick={f1}>Btn-1</button>
    </div>
  
}
