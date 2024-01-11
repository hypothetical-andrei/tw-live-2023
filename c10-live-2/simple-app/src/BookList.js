import { useState, useEffect } from 'react'
import dataStore from './BookStore'
import BookForm from './BookForm'
import Book from './Book'

const { store, eventManager } = dataStore

function BookList () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    store.getAll()
    eventManager.addEventListener('GET_ALL_SUCCESS', () => {
      setBooks(store.data)
    })
  }, [])

  const addBook = (item) => {
    store.addOne(item)
  }

  const deleteBook = (id) => {
    store.deleteOne(id)
  }

  const saveBook = (id, item) => {
    store.saveOne(id, item)
  }

  return (
    <div>
      {
        books.map(e => <Book item={e} key={e.id} onDelete={deleteBook} onSave={saveBook} />)
      }
      <div>
        <BookForm onAdd={addBook} />
      </div>
    </div>
  )
}

export default BookList