import React from 'react'

function Counter1({count}) {
  return (
    <div>
            {console.log('Counter Class')}
      The count is {count}
    </div>
  )
}
export default React.memo(Counter1)