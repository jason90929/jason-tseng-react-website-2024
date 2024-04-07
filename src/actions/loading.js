import { 
  INIT_LOADING,
  INCREMENT,
  LOADED,
  SET_MAX_LOADING,
} from '../constants/loading'

const initLoading = () => ({
  type: INIT_LOADING,
})

const increment = () => {
  return (dispatch, getState) => {
    dispatch({ type: INCREMENT })
    const { currentLoading, maxLoading } = getState().loading
    if (currentLoading >= maxLoading) {
      dispatch({ type: LOADED })
    }
  }
}

const setMaxLoading = (number) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_MAX_LOADING, payload: number })
  }
}

const loading = {
  initLoading,
  increment,
  setMaxLoading
}

export default loading
