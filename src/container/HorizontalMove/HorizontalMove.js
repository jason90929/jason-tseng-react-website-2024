import React, { Component } from 'react'
import { isMobile } from '../../resources/utility'
import { connect } from 'react-redux'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import './horizontal-move.scss'

class HorizontalMove extends Component {
  constructor () {
    super()
    this.onKeydown = this.onKeydown.bind(this)
    this.onMousewheel = this.onMousewheel.bind(this)
    this.onTouchstart = this.onTouchstart.bind(this)
    this.onTouchmove = this.onTouchmove.bind(this)
    this.state = {
      touchEvent: {
        prevEndX: 0,
        endX: 0
      }
    }
  }

  componentDidMount () {
    const rootEl = document.getElementById('root')
    if (rootEl) {
      if (!isMobile) {
        window.addEventListener('keydown', this.onKeydown)
        rootEl.addEventListener('mousewheel', this.onMousewheel)
        rootEl.addEventListener('DOMMouseScroll', this.onMousewheel)
      } else  {
        rootEl.addEventListener('touchstart', this.onTouchstart)
        rootEl.addEventListener('touchmove', this.onTouchmove)
      }
    }
  }

  componentWillUnmount () {
    const rootEl = document.getElementById('root')
    if (rootEl) {
      if (!isMobile) {
        window.removeEventListener('keydown', this.onKeydown)
        rootEl.removeEventListener('mousewheel', this.onMousewheel)
        rootEl.removeEventListener('DOMMouseScroll', this.onMousewheel)
      } else {
        rootEl.removeEventListener('touchstart', this.onTouchstart)
        rootEl.removeEventListener('touchmove', this.onTouchmove)
      }
    }
  }

  onKeydown (event) {
    if (this.props.isPaginationChanging) {
      return
    }
    if (event.keyCode === 37 ||
      event.keyCode === 38) {
      this.props.setPage(this.props.currentPage - 1)
    } else if (event.keyCode === 39 ||
      event.keyCode === 40) {
      this.props.setPage(this.props.currentPage + 1)
    }
  }

  onMousewheel (event) {
    if (this.props.isPaginationChanging) {
      return
    }

    const els = document.querySelectorAll('.area')
    const currentAreaEl = els[this.props.currentPage]
    var hasHorizontalScrollbar = currentAreaEl.scrollHeight > currentAreaEl.clientHeight
    if (hasHorizontalScrollbar) {
      return
    }
    // Firefox 使用 detail：下 3 上 -3，其他瀏覽器使用wheelDelta：下 -120，上 120
    const page = (event.wheelDelta ? event.wheelDelta : -event.detail) >= 0 ? -1 : 1
    // 上滾 : 下滾
    this.props.setPage(this.props.currentPage + page)
  }

  onTouchstart (event) {
    if (event && event.touches[0]) {
      this.setState(prevState => ({
        touchEvent: {
          endX: event.touches[0].pageX
        }
      }))
    }
  }

  onTouchmove (event) {
    if (event && event.touches[0]) {
      this.setState(prevState => ({
        touchEvent: {
          prevEndX: prevState.touchEvent.endX,
          endX: event.touches[0].pageX
        }
      }))
      const distanceX = this.state.touchEvent.prevEndX - this.state.touchEvent.endX
      const kinetic = 30
      if (distanceX > kinetic) {
        this.props.setPage(this.props.currentPage + 1)
      } else if (distanceX < -kinetic) {
        this.props.setPage(this.props.currentPage - 1)
      }
    }
  }

  render () {
    const x = this.props.currentPage * -100
    const className = cx('horizontal-move-inner', {
      'horizontal-move-inner-sliding': this.props.isPaginationChanging
    })
    return (
      <section className="horizontal-move">
        <div
          ref="horizontal"
          className={className}
          style={{
            transform: `translateX(${x}%)`
          }}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isPaginationChanging: state.pagination.isPaginationChanging
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
)(HorizontalMove)
