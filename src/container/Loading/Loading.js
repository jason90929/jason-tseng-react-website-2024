import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import loading from '../../actions/loading'

import {
  loadImage
} from '../../resources/utility'

class Loading extends Component {
  static defaultProps = {
    preloadData: []
  }

  static propTypes = {
    preloadData: PropTypes.array
  }

  componentWillMount () {
    this.props.initLoading()
    this.props.setMaxLoading(this.props.preloadData.length)
    // 不可延遲啟用否則 hover 任何圖都會狂發 request，原因不明
    this.props.preloadData.forEach(data => {
      loadImage(data, () => {
        this.props.increment()
      })
    })
  }

  render () {
    return null
  }
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
