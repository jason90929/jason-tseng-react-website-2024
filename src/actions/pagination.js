import { SET_PAGE, TOGGLE_PAGINATION_CHANGING } from "../constants/pagination"

const setPage = (page) => {
  return (dispatch, getState) => {
    if (page > getState().pagination.maxPage ||
      page === getState().pagination.currentPage ||
      page < 0 ||
      getState().pagination.isPaginationChanging) {
      return
    }
    dispatch({
      type: SET_PAGE,
      payload: page
    })
    dispatch({
      type: TOGGLE_PAGINATION_CHANGING,
      payload: true
    })
    window.setTimeout(() => {
      dispatch({
        type: TOGGLE_PAGINATION_CHANGING,
        payload: false
      })
    }, 1500)
  }
}

const pagination = {
  setPage
}

export default pagination
