import React,{useState,useCallback} from 'react'
import Counter from './Counter.js'; 
import Cars from './Cars.js'; 
export default function ParentMemo() {
    const [counter,setCounter]=useState(0);
    const [car,setCars]=useState(['tata','hyundai']);
    
    return (
    <div>
      {console.log('Parent Class')}
      <div>MemoParent</div>
      <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
      <hr/>
      <button onClick={()=>{setCars([...car,'Honda'])}}>Cars</button>
      <hr/>
      ======================================================
      <Counter count={counter}/>
      ======================================================
      <Cars cars={car}/>
    </div>
  )
}
