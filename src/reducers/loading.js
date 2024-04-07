import { 
  INIT_LOADING,
  INCREMENT,
  LOADED,
  SET_MAX_LOADING,
} from '../constants/loading'
import { updateObject } from '../resources/utility'

const initialState = {
  currentLoading: 0,
  maxLoading: 1,
  isLoaded: false
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LOADING:
      return updateObject(state, {
        currentLoading: 0,
        isLoaded: false
      })
    case INCREMENT:
      return updateObject(state, {
        currentLoading: state.currentLoading + 1
      })
    case SET_MAX_LOADING:
      return updateObject(state, {
        maxLoading: action.payload
      })
    case LOADED:
      return updateObject(state, {
        isLoaded: true
      })
    default:
      return state
  }
}

export default loadingReducer
