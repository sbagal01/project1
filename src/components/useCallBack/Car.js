import React from 'react'

function Car({cars}) {
  return (
    <>
        {console.log('Cars Class')}
      <ul>
        {cars.map(ca=><li key={ca}>{ca}</li>)}
      </ul>
  </>
  )
}
export default React.memo(Car)