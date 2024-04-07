import React, { PureComponent } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import pagination from '../../actions/pagination'
import './portfolio-switcher.scss'

class PortfolioSwitcher extends PureComponent {
  constructor () {
    super()

    this.state = {
      scrollerEl: null,
      showSwitcher: 0
    }
  }
  static defaultProps = {
    className: '',
    onClickPrev: () => {},
    onClickNext: () => {}
  }

  static propTypes = {
    className: PropTypes.string,
    onClickPrev: PropTypes.func,
    onClickNext: PropTypes.func
  }

  componentDidMount () {
    document.addEventListener('scroll', this.onScroll)
    this.setState(prevState => ({
      scroller: this.refs.scroller
    }))
    window.setTimeout(() => {
      this.onScroll()
    }, 0)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.onScroll)
    this.setState(prevState => ({
      scroller: 0
    }))
  }

  onScroll = () => {
    if (this.state.scroller) {
      const rect = this.state.scroller.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const showSwitcher = ((((window.innerHeight / 2) - elementTop) * 100) / elementHeight) > 0
      this.setState(prevState => ({
        showSwitcher
      }))
    }
  }

  toPrevPortfolio = () => {
    this.props.setPage(this.props.currentPage - 1)
    window.scrollTo(0, 0)
    this.props.onClickPrev()
  }

  toNextPortfolio = () => {
    this.props.setPage(this.props.currentPage + 1)
    window.scrollTo(0, 0)
    this.props.onClickNext()
  }

  render () {
    const className = cx('portfolio-switcher', {
      [this.props.className]: this.props.className,
      'portfolio-switcher-active': this.state.showSwitcher
    })
    return (
      <div
        className={className}
        ref="scroller">
        <div
          className="portfolio-switcher-inner"
          ref="scroller">
          <a // eslint-disable-line
            role="button"
            onClick={this.toNextPortfolio}>
            Next
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
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
)(PortfolioSwitcher)
