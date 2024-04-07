import { combineReducers } from 'redux'
import loadingReducer from './loading'
import pageReducer from './pagination'

export default combineReducers({
  loading: loadingReducer,
  pagination: pageReducer
})
