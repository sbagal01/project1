import React from 'react'

export default function ListDemo1() {
  let listItems=['tata','honda','maruti','hyundai','toyota'];
  let countries=['A','B','C','D'];
    return (

    <div>
        <select id="country" value="selectedCountry">
        <option value='Select a country'>Country</option>
        {countries.map(function(country,ind){
         
        return <option value={ind}>{country}</option>
         
        })}
        </select>
      
    </div>
  )
}
