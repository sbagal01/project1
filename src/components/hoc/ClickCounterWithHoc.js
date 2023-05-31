import React from 'react'
import CounterHigherOrderComponent from './CounterHigherOrderComponent';
function ClickCounterWithHoc(props) {
  return (
    <div>
      <button onClick={props.increment}>{props.count} Times</button>
      <p>Clicked {props.count} times</p>
    </div>
  )
}
export default CounterHigherOrderComponent(ClickCounterWithHoc)