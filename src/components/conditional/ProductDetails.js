import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
export default function ProductDetails() {
    const [details,setDetails]=useState({});
  const params=useParams();
  async function getDetails(){
    
  }
    useEffect(()=>{
        getDetails();
    },[])
    return (
    <div>
      This the product details page - {params.id}
    </div>
  )
}
