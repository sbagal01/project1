import React from 'react'

export default function RefDemo2() {
    let inputRef1;
    let inputRef2;
    let addition=()=>{
        let val1=parseInt(inputRef1.value);
        let val2=parseInt(inputRef2.value);
        alert(val1+val2)
    }
    return (
    <div>
      <input ref={(input1)=>inputRef1=input1}/><br/>
      <input ref={(input2)=>inputRef2=input2}/><br/>
      <button onClick={addition}>Add</button>
    </div>
  )
}
