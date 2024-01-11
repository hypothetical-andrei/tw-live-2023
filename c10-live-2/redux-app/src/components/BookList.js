import { useState, useEffect } from 'react'
import BookForm from './BookForm'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux'
import { bookActions } from '../actions'

const bookListSelector = state => state.book.bookList

function BookList () {
  const books = useSelector(bookListSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bookActions.getBooks())
  }, [])

  return (
    <div>
      {
        books.map(e => <Book item={e} key={e.id} />)
      }
      <div>
        <BookForm />
      </div>
    </div>
  )
}

export default BookList