import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import Icon from '../../components/Icon/Icon'
import nextImage from '../../assets/images/home/next.png'
import './aside.scss'

class Aside extends Component {
  render () {
    const next = () => {
      this.props.setPage(this.props.currentPage + 1)
    }
    const className = cx('aside', {
      'aside-loaded': this.props.isLoaded
    })
    const nextPageClass = cx('next-page', {
      'next-page-last': this.props.currentPage === this.props.maxPage,
      'next-page-changing': this.props.isPaginationChanging
    })
    return (
      <aside className={className}>
        <a // eslint-disable-line
          className={nextPageClass}
          role="button"
          onClick={next}>
          <span className="next-page-text">Next</span>
          <Icon
            className="next-page-icon"
            image={nextImage}
          />
        </a>
      </aside>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    isPaginationChanging: state.pagination.isPaginationChanging,
    maxPage: state.pagination.maxPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside)
