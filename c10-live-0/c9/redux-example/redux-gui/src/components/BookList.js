import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Book from './Book'
import BookForm from './BookForm'
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
      <BookForm />
    </div>
  )
}

export default BookList