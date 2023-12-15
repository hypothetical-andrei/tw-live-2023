class EventManager extends EventTarget {
  dispatch(message) {
    this.dispatchEvent(new Event(message))
  }
}

const manager = new EventManager()

export default manager

// instance.addEventListener('something', (e) => {
//   console.log('Instance fired "something".', e);
// });
// instance.doSomething();