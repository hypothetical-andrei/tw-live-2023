import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bookActions } from '../actions'

function Book (props) {
  const { item } = props
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(item.title)
  const [content, setContent] = useState(item.content)
  const dispatch = useDispatch()

  const handleSaveClick = () => {
    dispatch(bookActions.updateBook(item.id, {
      title,
      content
    }))
    setIsEditing(false)
  }

  const handleDeleteClick = () => {
    dispatch(bookActions.deleteBook(item.id))
  }

  return (
    <div>
      {
        isEditing ?
          <div>
            <input type='text' placeholder='title' onChange={(evt) => setTitle(evt.target.value)} value={title} />
            <input type='text' placeholder='content' onChange={(evt) => setContent(evt.target.value)} value={content} />
            <input type='button' value='save' onClick={handleSaveClick} />
            <input type='button' value='cancel' onClick={() => setIsEditing(false)} />
          </div>
        :
        <>
          Book: {item.title} has content {item.content}
          <input type='button' value='delete' onClick={handleDeleteClick} />
          <input type='button' value='edit' onClick={() => setIsEditing(true)} />
        </>
      }
    </div>
  )
}

export default Book