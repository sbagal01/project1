import React,{useState} from 'react'

const CounterHigherOrderComponent=(InnerComponent)=>{
function CounterHOC(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    return (
        <>
        <InnerComponent count={count} increment={increment} />
        </>
    )
}
return CounterHOC;
}
export default CounterHigherOrderComponent;