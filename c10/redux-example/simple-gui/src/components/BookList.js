import { bookActions } from '../actions'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

const bookListSelector = state => state.book.bookList

function BookList () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isNewBook, setIsNewBook] = useState(true)
  const [isDialogShown, setIsDialogShown] = useState(false)
  const [selected, setSelected] = useState(null)

  const bookList = useSelector(bookListSelector, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(bookActions.getBooks())
  }, [dispatch])
  
  const addNew = () => {
    setTitle('')
    setContent('')
    setSelected(null)
    setIsNewBook(true)
    setIsDialogShown(true)
  }

  const tableFooter = () => (
    <div>
      <Button label='Add' icon='pi pi-plus' onClick={addNew} />
    </div>
  )

  const opsTemplate = (rowData) => {
    return (
        <>
            <Button label='Delete' icon='pi pi-times' className='p-button-danger' onClick={() => deleteBook(rowData)} />
            <Button label='Edit' icon='pi pi-pencil' className='p-button-warning' onClick={() => editBook(rowData)} />
        </>
    )
  }
  
  const hideDialog = () => {
    setIsDialogShown(false)
  }

  const deleteBook = (rowData) => {
    dispatch(bookActions.deleteBook(rowData.id))
  }

  const editBook = (rowData) => {
    setTitle(rowData.title)
    setContent(rowData.content)
    setSelected(rowData.id)
    setIsNewBook(false)
    setIsDialogShown(true)
  }

  const saveBook = () => {
    if (isNewBook) {
        dispatch(bookActions.addBook({ title, content }))
    } else {
        dispatch(bookActions.updateBook(selected, { title, content }))
    }
    setTitle('')
    setContent('')
    setSelected(null)
    setIsNewBook(true)
    setIsDialogShown(false)
  }

  const dialogFooter = (
    <div>
        <Button label='Save' icon='pi pi-save' onClick={saveBook} />
    </div>
  )

  return (
    <div>
      <DataTable value={bookList} footer={tableFooter}>
        <Column header='Title' field='title' />
        <Column header='Content' field='content' />
        <Column header='Ops' body={opsTemplate} />
      </DataTable>
      {
      isDialogShown
        ? (
          <Dialog visible={isDialogShown} header='A book' footer={dialogFooter} onHide={hideDialog}>
              <InputText value={title} placeholder='title' onChange={(evt) => setTitle(evt.target.value)} />
              <InputText value={content} placeholder='content' onChange={(evt) => setContent(evt.target.value)} />
          </Dialog>
        ) : null
      }
  </div>
  )
}

export default BookList