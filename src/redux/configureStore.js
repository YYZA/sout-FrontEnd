import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import comment from './modules/comment'
import post from './modules/post'
import user from './modules/user'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  post: post,
  user: user,
  comment: comment,
  router: connectRouter(history),
})

const middlewares = [thunk.withExtraArgument({ history })]

const env = process.env.NODE_ENV
if (env === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

let store = (initialState) => createStore(rootReducer, enhancer)

export default store()
