import React from 'react'
import Category from './Category.js';
import categories from './category.json';
export default function Categories() {
  return (

<div className="container">
      <div className="row">
        {
            categories.map((category)=>{
                return (
                    <>
                    <Category id={category.id} title={category.title} image={category.image}></Category>
                    </>
                )
            })
        }
        </div>
    </div>
    
  )
}
