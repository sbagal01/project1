import React,{useRef} from 'react'

export default function RefDemo4() {
    let myRef1=useRef();
    let myRef2=useRef();

    let addition=()=>{
        let val1=parseInt(myRef1.current.value);
        let val2=parseInt(myRef2.current.value);
        alert(val1+val2)
    }
    return (
        <div>
        <input ref={myRef1}/><br/>
        <input ref={myRef2}/><br/>
        <button onClick={addition}>Add</button>
      </div>
  )
}
