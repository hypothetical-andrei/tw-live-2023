import { useState } from 'react'

function StateExample() {
  const [counter, setCounter] = useState(1)

  const handleClick = (evt) => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>
        The value of the counter is {counter}
      </div>
      <div>
        <input type='button' value='+' onClick={handleClick} />
      </div>
    </div>
  );
}

export default StateExample;
