import { useEffect, useState } from 'react'
import dataStore from './BookStore'
import Book from './Book'
import BookForm from './BookForm'

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
      <h2>List of books</h2>
      {
        books.map(e => <Book key={e.id} item={e} onDelete={deleteBook} onSave={saveBook} />)
      }
      <BookForm onAdd={addBook} />
    </div>
  )
}

export default BookList