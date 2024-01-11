import { useState } from 'react'

function StateExample() {
  const [counter, setCounter] = useState(0)

  const handleClick = (evt) => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h2>State example</h2>
      <div>The current value of the counter is {counter}</div>
      <div>
        <input type='button' value='+' onClick={handleClick} />
      </div>
    </>
  )
}

export default StateExample