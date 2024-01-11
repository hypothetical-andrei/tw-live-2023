import PropsChild from "./PropsChild"

function PropsParent () {
  const students = [{
    id: 1,
    name: 'jim',
    email: 'jim@nowhere.com'
  }, {
    id: 2,
    name: 'jane',
    email: 'jane@nowhere.com'
  }, {
    id: 3,
    name: 'tim',
    email: 'tim@nowhere.com'
  }]

  return (
    <div>
      <h2>Props</h2>
      {
        students.map(e => (
          <PropsChild item={e} key={e.id} />
          )
        )
      }
    </div>
  )
}

export default PropsParent