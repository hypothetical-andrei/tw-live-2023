import LiftingParent from './lifting/LiftingParent'
import PropsParent from './props/PropsParent'
import ReducerExample from './reducers/ReducerExample'
import StateExample from './state/StateExample'
import UpdateParent from './update/UpdateParent'

function App() {
  return (
    <div>
      <h1>Hello from React!</h1>
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
