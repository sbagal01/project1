import React from 'react'

export default function ListDemo2() {
    let countries=['A','B','C','D'];

    return (
    <div>
        <input list="countries" name="countries"></input>
      <datalist id="country" value="selectedCountry">
        {countries.map(function(country,ind){
            return <option value={ind}>{country}</option>
        })}
        </datalist>
    </div>
  )
}
