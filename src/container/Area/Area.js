import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Background from '../Background/Background'
import FullCenter from '../../components/FullCenter/FullCenter'
import './area.scss'

class Area extends Component {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }
  
  constructor () {
    super()
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    const areaEl = this.refs.area
    if (areaEl) {
      areaEl.addEventListener('scroll', this.onScroll)
    }
    // window.setTimeout(() => {
    //   this.props.setPage(1)
    // }, 3000)
  }

  componentWillUnmount () {
    const areaEl = this.refs.area
    if (areaEl) {
      areaEl.removeEventListener('scroll', this.onScroll)
    }
  }

  onScroll (event) {
    // on scrolling...
  }

  getElement () {
    return this.refs.area
  }

  render () {
    const className = cx('area', {
      [this.props.className]: this.props.className
    })
    return (
      <FullCenter className="loading">
        <Background
          lineActive={this.props.isLoaded}
          key="Background"
        />
        <section
          ref="area"
          className={className}>
          {this.props.children}
        </section>
      </FullCenter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(Area)
