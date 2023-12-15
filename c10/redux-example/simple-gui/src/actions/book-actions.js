import { SERVER } from '../config/global'


export const GET_BOOKS = 'GET_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'

export function getBooks() {
  return {
    type: GET_BOOKS,
    payload: async () => {
      const response = await fetch(`${SERVER}/books`)
      if (!response.ok) {
        throw response
      }
      const data = await response.json()
      return data
    }
  } 
}

export function addBook(book) {
  return {
      type: ADD_BOOK,
      payload: async () => {
        let response = await fetch(`${SERVER}/books`, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!response.ok) {
          throw response
        }
        response = await fetch(`${SERVER}/books`)
        if (!response.ok) {
          throw response
        }
        const data = await response.json()
        return data
      }
  } 
}


export function deleteBook(bookId) {
  return {
      type: DELETE_BOOK,
      payload: async () => {
        let response = await fetch(`${SERVER}/books/${bookId}`, {
            method: 'delete'
        })
        if (!response.ok) {
          throw response
        }
        response = await fetch(`${SERVER}/books`)
        if (!response.ok) {
          throw response
        }
        const data = await response.json()
        return data
      }
  } 
}

export function updateBook(bookId, book) {
  return {
      type: UPDATE_BOOK,
      payload: async () => {
        let response = await fetch(`${SERVER}/books/${bookId}`, {
            method: 'put', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!response.ok) {
          throw response
        }
        response = await fetch(`${SERVER}/books`)
        if (!response.ok) {
          throw response
        }
        const data = await response.json()
        return data
      }
  } 
}
