import React from 'react'
import './Category.css'

//import Category from './category.json';

export default function Category(props) {
  
  return (
    
      
        <div className="col">
            <div className="category text-center">
            <img src={props.image}></img>
            <div>{props.title}</div>
            </div>
        </div>
        
   
  )
}
