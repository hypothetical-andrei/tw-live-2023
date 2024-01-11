import { useState } from 'react'

function LiftingChild (props) {
  const { item, onUpdate } = props
  const [name, setName] = useState(item.name)
  const [email, setEmail] = useState(item.email)

  const handleClick = (evt) => {
    onUpdate({
      id: item.id,
      name,
      email
    })
  }

  return (
    <div>
      i am 
      <input type='text' value={name} onChange={(evt) => setName(evt.target.value)} /> 
      and have the email 
      <input type='text' value={email} onChange={(evt) => setEmail(evt.target.value)} /> 
      <input type='button' value='save' onClick={handleClick} />
    </div>
  )
}

export default LiftingChild