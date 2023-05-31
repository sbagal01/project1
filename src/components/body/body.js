import React,{useState,Suspense} from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from '../routing/Home.js'
import ContactUs from '../routing/ContactUs.js'
import NotFound from '../routing/NotFound.js'
import Careers from '../routing/Careers.js';
import Categories from '../Categories/Categories.js';
import Authenticate from '../routing/Authenticate.js';
import ProductDetails from '../conditional/ProductDetails.js';
//import ConditionalDemo2 from '../conditional/ConditionalDemo2.js';
//import StateComp from '../state/StateComp.js';
//import PropData from '../state/PropData.js';
//import Demo1 from '../demo1/Demo1.js';
//import ListDemon from '../demo1/ListDemo1.js';
//import ListDemo2 from '../demo1/ListDemo2.js';
//import ListDemo1 from '../listItem/ListDemo1.js';
// import ListDemo3 from '../listItem/ListDemo3.js';
//import ConditionalDemo from '../conditional/ConditionalDemo.js';
const ConditionalDemo2= React.lazy(()=>import('../conditional/ConditionalDemo2.js'))

//import ForceUpdate from '../forceUpdate/ForceUpdate';
//import StatFunction from '../state/StatFunction.js';
//import StatFunction2 from '../state/StatFunction2.js';
//import StateDemo4 from '../state/StateDemo4.js';
// import StateDemo5 from '../state/StateDemo5.js';
//import Parent from '../communication/Parent.js';
//import Addition from '../state/Addition.js';
// import FunctionalNum from '../state/FunctionalNum.js';
// import SearchBarUsage from '../listItem/SearchBarUsage.js';
// import Bubbling from '../Bubbling/Bubbling.js'
// import ParentMemo from '../memo/ParentMemo.js';
// import Demo5 from '../demo1/Demo5.js'

// import UseMemoDemo from '../hooks/UseMemoDemo.js';
// import UseEffect2 from '../hooks/UseEffect2.js';
// import UseEffect1 from "../hooks/UseEffect1.js"

//import RefDemo3 from '../useRef/RefDemo3.js';
//  import UseMemo2 from '../hooks/UseMemo2.js';

//import LifeCycleDemo from '../lifeCycle/LifeCycleDemo.js';
// import RefDemo4 from '../useRef/RefDemo4';
// import RefDemo2 from '../useRef/RefDemo2';
//import RefDemo1 from '../useRef/RefDemo1';
// import UseCallBack from '../useCallBack/UseCallBack.js';
// import LifeCycleDemo2 from '../lifeCycle/LifeCycleDemo2.js'
//import FormDemo1 from '../forms/FormDemo1.js'
// import FormDemo2 from '../forms/FormDEmo2.js';
//import FormDemo3 from '../forms/FormDEmo2.js';
//import HttpDemo from '../http/HttpDemo.js';
// import HttpDemo2 from '../http/HttpDemo2.js';
// import JSONAssignment from '../http/JSONAssignment'

//import HttpDemo3 from '../http/HttpDemo3.js';
//import HttpDemo6 from '../http/HttpDemo6.js';
//import HttpDemo4 from '../http/HttpDemo4';

// import ClickCounterWithHoc from '../hoc/ClickCounterWithHoc';
// import ClickCounterWithHover from '../hoc/ClickCounterWithHover';

//import ModalDemo from '../state/ModalDemo.js';

export default function Bodies() {
  const maxLimit=50;
  const [text,setText]=useState('');
  const [countLength,setCountLength]=useState(maxLimit);
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [isChecked,setIsChecked]=useState(false);

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        }

    const handleLowerClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);  
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handleKeyCount=(e)=>{
      if(text.length>50){
        e.preventDefault();
        return;
      }
      setCountLength(maxLimit-text.length)
    }
    const handleUserName=(e)=>{
      setUserName(e.target.value);
    }
    const handlePassword=(e)=>{
      
      setPassword(e.target.value);
    }
  return (
  
    <div className="container">
      {<Categories/>}
      {/* <ConditionalDemo2 /> */}
      <input type="text" placeholder='username' value={userName} onChange={handleUserName}></input>
      <br/>
      <br/>
      <input type={isChecked?'text':'password'} value={password} placeholder='password' onChange={handlePassword}></input>
      <br/>
      <input type="checkbox" onChange={()=>{
        setIsChecked(!isChecked)}}/>
      <span>{isChecked?"Hide":"Show"} password</span>
    <div className="mb-3">
        <textarea maxLength={maxLimit} className="form-control" value={text} onKeyUp={handleKeyCount} onChange={handleOnChange} id="myBox" rows="10" />
        <span>{countLength} Characters Remaining</span>
    </div>
    <button className="btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className=" btn-primary" onClick={handleLowerClick}>Convert to LowerCase</button>

    {/* <Demo1 /> */}
    {/* <ListDemo1 />
    <ListDemo2 /> */}
    {/* <ConditionalDemo /> */}
    {/* {<ConditionalDemo2/>} */}
    {/* {<ListDemon />} */}
    {/* {<ListDemo1 />} */}
    {/* {<ListDemo3 />} */}
    {/* {<ForceUpdate/>} */}
    {/* {<StateComp />} */}
      {/* {<PropData name="Saurabh" age={26} msg="Good Morning">
      <div>This is child's Data1</div>
      <div>This is child's Data2</div>
      
      </PropData>} */}

    {/* {<StatFunction/>} */}
      {/* <StatFunction2/> */}
      {/* <StateDemo4/> */}
      {/* {<StateDemo5/>} */}
      {/* {<SearchBarUsage />} */}
      {/* <Addition/> */}
      {/* {<FunctionalNum/>} */}
      {/* {<Bubbling/>} */}
      {/* {<Parent/>} */}
      {/* {<Demo5/>} */}
      {/* {<ParentMemo/>} */}
      {/* {<UseMemoDemo />} */}
      {/* <UseMemo2/> */}
      {/* {<LifeCycleDemo/>}  */}
      {/* <UseCallBack/> */}
      {/* <LifeCycleDemo2/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect1/> */}
      {/* <RefDemo3/> */}
      {/* <RefDemo4/> */}
      {/* <RefDemo2/> */}
      {/* <RefDemo1/> */}
      {/* <FormDemo1/> */}
      {/* <FormDemo2/> */}
      {/* <FormDemo3/> */}
      {/* <HttpDemo/> */}
      {/* <HttpDemo2/> */}
      {/* <JSONAssignment/> */}
      {/* <HttpDemo3/> */}
      {/* <HttpDemo4/>
      <HttpDemo6/> */}
      {/* <HttpDemo3/> */}
      {/* <ClickCounterWithHoc/>
      <ClickCounterWithHover/> */}
      {/* <ModalDemo/> */}
      <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/contactUs" element={<ContactUs/>} />
        <Route exact path="/careers" element={<Careers/>} />

        <Route exact path="/productList" element={
          <Authenticate>
            <ConditionalDemo2></ConditionalDemo2>
          </Authenticate> } />
        <Route exact path="/productDetails/:id" element={<ProductDetails />}></Route>
        <Route exact path="*" element={<NotFound/>} />

      </Routes>
      </Suspense>
    </div>
    
  )
}
