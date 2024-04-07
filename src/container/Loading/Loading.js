import { useEffect } from 'react'
import { connect } from 'react-redux'
import loading from '../../actions/loading'
import {
  loadImage
} from '../../resources/utility'

function Loading(props) {
  useEffect(() => {
    props.initLoading()
    props.setMaxLoading(props.preloadData.length)
    // 不可延遲啟用否則 hover 任何圖都會狂發 request，原因不明
    props.preloadData.forEach(data => {
      loadImage(data, () => {
        props.increment()
      })
    })
  }, [props])

  return null
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initLoading: () => dispatch(loading.initLoading()),
    increment: () => dispatch(loading.increment()),
    setMaxLoading: (number) => dispatch(loading.setMaxLoading(number))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Loading)
