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

}

const store = new DataStore()

export default { store, eventManager }