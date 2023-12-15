import StateExample from "./state/StateExample"
import PropsParent from "./props/PropsParent"
import UpdateParent from "./update/UpdateParent"
import LiftingParent from "./lifting/LiftingParent"
import ReducerExample from "./reducers/ReducerExample"
import CustomHookExample from "./hooks/CustomHookExample"
import ContextParent from "./context/ContextParent"

function App() {
  return (
    <div>
      {/* <h3>State</h3>
      <StateExample />
      <h3>Props</h3>
      <PropsParent />
      <h3>Update</h3>
      <UpdateParent />
      <h3>Lifting</h3>
      <LiftingParent /> */}
      {/* <h3>Reducers</h3>
      <ReducerExample />
      <h3>Custom hook</h3>
      <CustomHookExample /> */}
      <h3>Context</h3>
      <ContextParent />
    </div>
  );
}

export default App;
