import StateExample from './state/StateExample'
import PropsParent from './props/PropsParent'
import UpdateParent from './update/UpdateParent'
import LiftingParent from './lifting/LiftingParent'
import ReducerExample from './reducers/ReducerExample'

function App() {
  return (
    <div>
      <h1>Hello from React</h1>
      <div>
        <StateExample />
      </div>
      <div>
        <PropsParent />
      </div>
      <div>
        <UpdateParent />
      </div>
      <div>
        <LiftingParent />
      </div>
      <div>
        <ReducerExample />
      </div>
    </div>
  )
}

export default App