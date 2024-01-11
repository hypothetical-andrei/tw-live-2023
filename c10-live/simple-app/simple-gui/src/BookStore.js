import { SERVER } from './consts'
import eventManager from './emitter' 

class DataStore {
  constructor () {
    this.data = []
    this.item = null
  }

  async getAll () {
    try {
      const response = await fetch(`${SERVER}/books`)
      if (response.ok) {
        this.data = await response.json()
        eventManager.dispatch('GET_ALL_SUCCESS')
      } else {
        eventManager.dispatch('GET_ALL_ERROR')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async addOne (item) {
    try {
      const response = await fetch(`${SERVER}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      if (response.ok) {
        this.getAll()
      } else {
        eventManager.dispatch('ADD_ONE_ERROR')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async saveOne (id, item) {
    try {
      const response = await fetch(`${SERVER}/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      if (response.ok) {
        this.getAll()
      } else {
        eventManager.dispatch('SAVE_ONE_ERROR')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async deleteOne (id) {
    try {
      const response = await fetch(`${SERVER}/books/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        this.getAll()
      } else {
        eventManager.dispatch('DELETE_ONE_ERROR')
      }
    } catch (err) {
      console.warn(err)
    }
  }

}

const store = new DataStore()

export default { store, eventManager }