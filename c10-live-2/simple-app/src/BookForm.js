import { useState } from 'react'

function BookForm (props) {
  const { onAdd } = props

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddClick = (evt) => {
    onAdd({
      title,
      content
    })
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <div>
        <input type='text' placeholder='title' onChange={(evt) => setTitle(evt.target.value)} />
      </div>
      <div>
        <input type='text' placeholder='content' onChange={(evt) => setContent(evt.target.value)} />
      </div>
      <input type='button' value='add' onClick={handleAddClick} />
    </div>
  )
}

export default BookForm