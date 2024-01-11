import { useEffect, useState } from 'react'
import dataStore from './BookStore'
import AddBookForm from './AddBookForm'
import Book from './Book'

const { store, eventManager } = dataStore

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    store.getAll()
    eventManager.addEventListener('GET_ALL_SUCCESS', () => {
        setBooks(store.data)
    })
  }, [])

  const addBook = (book) => {
      store.addOne(book)
  }

  const saveBook = (id, book) => {
      store.saveOne(id, book)
  }

  const deleteBook = (id) => {
      store.deleteOne(id)
  }

  return (
    <div>
        <h3>list of books</h3>
        {
            books.map((e) => <Book key={e.id} item={e} onSave={saveBook} onDelete={deleteBook} />)
        }
        <h3>Add a book</h3>
        <AddBookForm onAdd={addBook} />
    </div>
  )
}

export default BookList
