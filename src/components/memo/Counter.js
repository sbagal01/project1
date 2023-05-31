import React from 'react'

 function Counter({count}) {
  return (
    <div>
            {console.log('Counter Class')}
      The count is {count}
    </div>
  )
}
export default React.memo(Counter);