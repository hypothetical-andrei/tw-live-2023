import { useEffect, useState } from 'react'
import Book from './Book'
import BookForm from './BookForm'
import { bookActions } from '../actions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

const bookListSelector = state => state.book.bookList

function BookList () {
  const books = useSelector(bookListSelector, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bookActions.getBooks())
  }, [])

  return (
    <div>
      <h2>List of books redux</h2>
      {
        books.map(e => <Book key={e.id} item={e} />)
      }
    </div>
  )
}
{/* <BookForm /> */}

export default BookList