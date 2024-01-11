class EventManager extends EventTarget {
  dispatch(message) {
    console.warn(message)
    this.dispatchEvent(new Event(message))
  }
}

const manager = new EventManager()

export default manager