import { useState } from 'react'
import { bookActions } from '../actions'
import { useDispatch } from 'react-redux'

function BookForm (props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleAddClick = (evt) => {
    dispatch(bookActions.addBook({
      title,
      content
    }))
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