import React,{useMemo,useState} from 'react';
const expensiveCalculation=(num)=>{
console.log('Calculating...');
for(let i=1;i<10000;i++){
    num+=1;
}
return num;
}
export default function UseMemo2() {
  const [count,setCount]=useState(0);
  const [todos,setTodos]=useState(['Todo-1','Todo-2']);

    const calculation=useMemo(()=>{
        expensiveCalculation(count)
    },[count]);
    const increment=()=>{
        setCount((c)=>c+1);
    }
    const addTodo=()=>{
        setTodos([...todos,"New Todo"]);
    }
    return (
    <div>
        Count: {count}
        <ul>
        {
            todos.map((todo,ind)=>{
                return <li key={ind}>{todo}</li>
            })
        }
        </ul>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={increment}>Add</button>
      <h2>Expensive Calculation</h2>
       <p> {calculation}</p>
    </div>
  )
}
