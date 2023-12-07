import { useEffect, useState } from 'react'
import dataStore from './BookStore'
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

  return (
    <div>
      <h2>List of books</h2>
      {
        books.map(e => <Book key={e.id} item={e} />)
      }
    </div>
  )
}

export default BookList