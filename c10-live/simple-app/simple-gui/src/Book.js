import { useState } from 'react'

function Book (props) {
  const { item, onDelete, onSave } = props
  const [title, setTitle] = useState(item.title)
  const [content, setContent] = useState(item.content)

  const [isEditing, setIsEditing] = useState(false)
  
  const save = () => {
    onSave(item.id, {
      title,
      content
    })
    setIsEditing(false)
  }

  return (
    <div>
      {
        isEditing ? 
          <div>
            <input type='text' placeholder='title' onChange={(evt) => setTitle(evt.target.value)} value={title} />
            <input type='text'  placeholder='content' onChange={(evt) => setContent(evt.target.value)} value={content} />
            <input type='button' value='save' onClick={save} />
            <input type='button' value='cancel' onClick={() => setIsEditing(false)} />

          </div>
        :
        <div>
          {item.title} has content {item.content}
          <input type='button' value='delete' onClick={() => onDelete(item.id)} />
          <input type='button' value='edit' onClick={() => setIsEditing(true)} />
        </div>  
      }
    </div>
  ) 
}

export default Book