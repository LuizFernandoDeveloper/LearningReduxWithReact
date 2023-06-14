import { legacy_createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from "./root-reducer.js"

const store = legacy_createStore(rootReducer, applyMiddleware(logger))

export default store
