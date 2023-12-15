import { useState } from 'react'
import LiftingChild from './LiftingChild'

function LiftingParent () {
  const [students, setStudents] = useState([{
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
  }])

  const handleUpdate = (student) => {
    const modifiedStudents = students
    const index = modifiedStudents.findIndex(e => e.id === student.id)
    modifiedStudents[index] = student
    setStudents([...modifiedStudents])
  }

  return (
    <div>
      <h2>Lifting</h2>
      <h3>State in parent</h3>
      {
        students.map(e => <div>name: {e.name} email: {e.email}</div>)
      }
      {
        students.map(e => (
          <LiftingChild item={e} key={e.id} onUpdate={handleUpdate} />
          )
        )
      }
    </div>
  )
}

export default LiftingParent