import React,{useState,useCallback} from 'react'
import Counter1 from './Counter1.js'; 
import Car from './Car.js'; 
export default function UseCallBack() {
    const [counter,setCounter]=useState(0);
    const [car,setCars]=useState(['tata','hyundai']);
    const increment=useCallback(()=>{
        setCounter(counter+1);
      },[counter])
      const addCar=useCallback(()=>{
        setCars([...car,'Honda']);
      },[car])
    return <>
      {console.log('Parent Class')}
      <div>UseCallback</div>
      <button onClick={increment}>Increment</button>
      <hr/>
      <button onClick={addCar}>addCar</button>
      <hr/>
      ======================================================
      <Counter1 count={counter} increment={increment}/>
      ======================================================
      <Car cars={car} addCar={addCar}/>
    </>
}
