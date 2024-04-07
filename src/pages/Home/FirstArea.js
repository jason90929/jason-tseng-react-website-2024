import React, { Component } from 'react'
import Area from '../../container/Area/Area'
import { connect } from 'react-redux'
import cx from 'classnames'
import './first-area.scss'

class FirstArea extends Component {
  render () {
    const className = cx('first-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'home'
    })
    return (
      <Area className={className}>
        <h1 className="first-area-title first-area-frame-1">
          Hello.
          <br />
          It's nice to see you here.
        </h1>
        <p className="first-area-text first-area-frame-2">
          I'm Senior Software Engineer with 9+ years in software development.
        </p>
      </Area>
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
)(FirstArea)
