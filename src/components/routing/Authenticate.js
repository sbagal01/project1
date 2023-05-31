import React from 'react';
import {Navigate} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
export default function Authenticate({children}) {
    //const nav=useNavigate();
    const role="Studen";
    if(role==="Student"){
        alert('You do not have access');
        return <Navigate to="/home" replace/>
    }
    return children
  
}
