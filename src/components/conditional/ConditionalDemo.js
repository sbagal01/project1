import React from 'react'
import Demo1 from '../demo1/Demo1';
import Demo2 from '../demo1/Demo2';
export default function ConditionalDemo() {
  let n=3;
 
    let unreadMessage=[];
      {/* {n%2===0?`${n} is even number`:`${n} is odd number`} */}
      {/* {n%2===0?<Demo1 />:<Demo2 />} */}

    //   {if(n%2===0){
    //        return  (<Demo1 />)
    //   }else{
    //     return (<Demo2 />)
    //   }}

    return (
        <div>
            {
                unreadMessage.length>0 && (
                    <h2>You have {unreadMessage.length} unseen messages</h2>
                )
            }
        </div>
    )
    
  
}
