import { useState } from 'react'

function useGuardedState(intial, min, max) {
    const [value, setValue] = useState(intial)

    const setGuarded = (nextValue) => {
        if (nextValue >= min && nextValue <= max) {
            setValue(nextValue)
        }
    }

    return [value, setGuarded]
}

function StateExample() {
    const [counter, setCounter] = useGuardedState(1, 0, 10)

    const handleIncrease = (evt) => {
        setCounter(counter + 1)
    }

    const handleDecrease = (evt) => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div>
                the current value of counter is {counter}
            </div>
            <div>
                <input type='button' value='+' onClick={handleIncrease} />
                <input type='button' value='-' onClick={handleDecrease} />
            </div>
        </>
    )
  }
  
  export default StateExample
  