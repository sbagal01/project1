import React from 'react'

function Cars({cars}) {
  return <>
        {console.log('Cars Class')}
      <ul>
        {cars.map(ca=><li key={ca}>{ca}</li>)}
      </ul>
  </>
}
export default React.memo(Cars)