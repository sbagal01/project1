import React,{useState,useRef} from 'react'

export default function FormDemo1() {
  let [fName,setFname]=useState('Sachin');
  let [lName,setLname]=useState('Tendulkar');
  const ref1=useRef();
  const ref2=useRef();
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(fName+" "+lName)
    console.log(ref1.current.value +" "+ ref2.current.value)
  }
  const resetMyForm=()=>{
    document.getElementById("myForm").reset()
  }
  return (
    <div>
      <form onSubmit={submitHandler} id="myForm" onReset={resetMyForm}>
        First Name : 
        <input name="fName" defaultValue={fName}ref={ref1} />
        <br/>
        Last Name :
        <input name="lName" defaultValue={lName}ref={ref2} />
        <br/>
        <input type='submit' />
        <input type='reset' />
      </form>
    </div>
  )
}
//This is Uncontrolled Component.If we pass only value as attribute in JSX then it would be only read only component We would get an error "'value' prop to a form field without in onChange handler".value is stored in ref.
//To make it to Controlled Form we add a value as well as onChange event.
//fName and lName is taken from useState
//To reset a form 
//All buttons are assumed to be submit buttons.
{/* <button type="button"></button>.his will make it a normal button */ }
//Then we can assign function to run a method
//So we use input type=submit and reset.On resetting, resetMyForm will be run and form data will be reset to default values.