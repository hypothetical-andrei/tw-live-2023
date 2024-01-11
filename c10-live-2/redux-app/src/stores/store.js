import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(logger, promise)

const store = createStore(reducers, middleware)

export default store