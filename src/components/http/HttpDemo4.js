import React,{useEffect} from 'react'
import axios from 'axios';

export default function HttpDemo4() {

    const fetchData=async function (){
        const promise1 = axios.get('https://api.github.com/users/defunkt');
        const promise2 = axios.get('https://api.github.com/users/evanphx');

        try{
            let [response1,response2]=await axios.all([promise1,promise2]);
            console.log(response1.data,response2.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
    <h2>Axios Promise</h2>
    </div>
  )
}
