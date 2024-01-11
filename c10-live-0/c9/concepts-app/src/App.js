import StateExample from './state/StateExample'
import PropsParent from './props/PropsParent'
import UpdateParent from './update/UpdateParent'
import LiftingParent from './lifting/LiftingParent'
import ReducerExample from './reducers/ReducerExample'

function App() {
  return (
    <div>
      <h3>state</h3>
      <StateExample />
      <h3>props</h3>
      <PropsParent />
      <h3>update</h3>
      <UpdateParent />
      <h3>lifting</h3>
      <LiftingParent />
      <h3>reducers</h3>
      <ReducerExample />
    </div>
  )
}

export default App
