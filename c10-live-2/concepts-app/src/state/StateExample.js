import { useState } from 'react'

function StateExample () {
  let [counter, setCounter] = useState(0)

  const handleClick = (evt) => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>State</h2>
      <div>{counter}</div>
      <div>
        <input type='button' value='+' onClick={handleClick} />
      </div>
    </div>
  )
}

export default StateExample