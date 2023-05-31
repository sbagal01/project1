import React from 'react'
import './Style1.css';
import Styles from './Style1.module.css';
export default function Demo2() {
  return (
    <div>
      <div className="class1">This is div1</div>
      <div className={Styles.class1}>This is div2</div>
    </div>
  )
}
