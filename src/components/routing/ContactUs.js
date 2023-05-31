import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function ContactUs() {
  const navigate=useNavigate();
  const doSomething=()=>{
    setTimeout(()=>{
      navigate("/careers");
    },5000)
  }
  return (
    <>
    <h2 className="text-center">This is Contact Page</h2>
    <a href="/careers">Go to Careers</a>
    <br/>
    <Link to="/careers">Go to Careers without reload</Link>
    <br/>
    <button onClick={doSomething}>Do thing</button>
    <br/>
    <button onClick={()=>{navigate(1)}}>Go Forward</button>
    <br/>
    <button onClick={()=>{navigate(-1)}}>Go Backward</button>

    </>

  )
}
