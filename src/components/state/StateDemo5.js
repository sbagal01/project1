import React,{useState} from 'react'
import Swal from 'sweetalert2';
export default function StateDemo5() {
    let [visible,setVisible]=useState(true);
    const changeVisibilty=()=>{
        setVisible(!visible);
    }
    const openMyAlert=()=>{
        Swal.fire(
            'Good Job!',
            'You clicked the button',
            'success'
        )
    }
    return (
    <div>
        {visible===true?<p>This is Paragraph</p>:null}
      <button onClick={()=>{changeVisibilty()}}>SHOW/HIDE</button>
      <button onClick={openMyAlert}>Alert</button>
    </div>)
    // {
    //     if(visible){
    //         return (<>
    //            <p>This is paragraph</p> 
    //         <button onClick={()=>{changeVisibilty()}}>SHOW/HIDE</button></>
    //         )
    //     }else{
    //         return (

    //             <button onClick={()=>{changeVisibilty()}}>SHOW/HIDE</button>
    //             )
    //     }
    // }
}
