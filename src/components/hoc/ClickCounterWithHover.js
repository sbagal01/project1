import React from 'react'
import CounterHigherOrderComponent from './CounterHigherOrderComponent';

function ClickCounterWithHover(props) {
  return (
    <>
     <button onMouseOver={props.increment}>Hover Button</button> 
     <p>Hover count is {props.count}</p>
    </>
  )
}
export default CounterHigherOrderComponent(ClickCounterWithHover);