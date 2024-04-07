import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import './portfolio-navigator.scss'

class PortfolioNavigator extends Component {
  state = {
    startFrom: 0
  }

  componentDidMount () {
    const startFrom = this.props.pageList.findIndex(page => page === 'portfolio')
    this.setState(prevState => ({
      startFrom
    }))
  }

  render () {
    const className = cx('portfolio-navigator', {
      'portfolio-navigator-active': this.props.pageList[this.props.currentPage] === 'portfolio'
    })
    let translateY = `-${(this.props.currentPage - this.state.startFrom) * 1.4}em` // same as $size in scss file
    return (
      <div className={className}>
        <div className="current-count-wrapper">
          <div className="current-count-inner">
            <div
              className="current-count-inside"
              style={{ transform: `translateY(${translateY})` }}>
              <span className="current-count">1</span>
              <span className="current-count">2</span>
              <span className="current-count">3</span>
              <span className="current-count">4</span>
              <span className="current-count">5</span>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="portfolio-count">
          <div className="portfolio-count-inner">
            5
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isPaginationChanging: state.pagination.isPaginationChanging,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(PortfolioNavigator)
