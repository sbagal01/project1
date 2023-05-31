import React,{useState} from 'react'
import Child1 from './Child1.js';
import Child2 from './Child2.js';
export default function Parent() {
    let [name,setName]=useState('Sachin');
    return (
    <div>
      <div className="container" style={{border:"5px solid red"}}>
        <div className="row">
        <div>I am Parent Component</div>
        <div>My own data is {name}</div>
        <hr/>
        <div className="col-6">
        <Child1 name={name} />
        </div>
        <div className="col-6">
        <Child2 setName={setName} />
        </div>
        </div>
      </div>
    </div>
  )
}
