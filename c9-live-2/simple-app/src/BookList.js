import { useState, useEffect } from 'react'
import dataStore from './BookStore'

const { store, eventManager } = dataStore

function BookList () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    store.getAll()
    eventManager.addEventListener('GET_ALL_SUCCESS', () => {
      setBooks(store.data)
    })
  }, [])

  return (
    <div>
      {
        books.map(e => <div key={e.id}>Book: {e.title} has content {e.content}</div>)
      }
    </div>
  )
}

export default BookList