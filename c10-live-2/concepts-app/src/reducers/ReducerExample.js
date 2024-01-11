import { useReducer } from 'react'

const initial = {
  count: 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

function ReducerExample () {
  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div>
      <h2>Reducers</h2>
      <div>State is currently: {state.count}</div>
      <div>
        <input type='button' value='-' onClick={() => dispatch({ type: 'decrement' })} />
        <input type='button' value='+' onClick={() => dispatch({ type: 'increment' })} />
      </div>
    </div>
  )
}

export default ReducerExample