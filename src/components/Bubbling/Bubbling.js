import React from 'react'

export default function Bubbling() {
  return (
    <div>
      <div onClick={()=>{console.log('Div-1 Clicked')}}>Div1
        <div onClick={(ev)=>{
            console.log('Div-2 Clicked');
            ev.stopPropagation();
            }}>Div2
        <div onClick={()=>{console.log('Div-3 Clicked')}}>Div3</div>
        </div>
      </div>
    </div>
  )
}
