import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from '../../resources/utility'
import { connect } from 'react-redux'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import './horizontal-move.scss'

function HorizontalMove(props) {
  const horizontalRef = useRef(null)
  const [touchEvent, setTouchEvent] = useState({
    prevEndX: 0,
    endX: 0
  })

  useEffect(() => {
    const rootEl = document.getElementById('root')

    const onKeydown = function(event) {
      if (props.isPaginationChanging) {
        return
      }
      if (event.keyCode === 37 ||
        event.keyCode === 38) {
        props.setPage(props.currentPage - 1)
      } else if (event.keyCode === 39 ||
        event.keyCode === 40) {
        props.setPage(props.currentPage + 1)
      }
    }
  
    const onMousewheel = function(event) {
      if (props.isPaginationChanging) {
        return
      }
  
      const els = document.querySelectorAll('.area')
      const currentAreaEl = els[props.currentPage]
      var hasHorizontalScrollbar = currentAreaEl.scrollHeight > currentAreaEl.clientHeight
      if (hasHorizontalScrollbar) {
        return
      }
      // Firefox 使用 detail：下 3 上 -3，其他瀏覽器使用wheelDelta：下 -120，上 120
      const page = (event.wheelDelta ? event.wheelDelta : -event.detail) >= 0 ? -1 : 1
      // 上滾 : 下滾
      props.setPage(props.currentPage + page)
    }
  
    const onTouchstart = function(event) {
      if (event && event.touches[0]) {
        setTouchEvent(prevState => ({
          endX: event.touches[0].pageX
        }))
      }
    }
  
    const onTouchmove = function(event) {
      if (event && event.touches[0]) {
        setTouchEvent(prevState => ({
          prevEndX: prevState.touchEvent.endX,
          endX: event.touches[0].pageX
        }))
        const distanceX = touchEvent.prevEndX - touchEvent.endX
        const kinetic = 30
        if (distanceX > kinetic) {
          props.setPage(props.currentPage + 1)
        } else if (distanceX < -kinetic) {
          props.setPage(props.currentPage - 1)
        }
      }
    }

    if (rootEl) {
      if (!isMobile) {
        window.addEventListener('keydown', onKeydown)
        rootEl.addEventListener('wheel', onMousewheel)
      } else  {
        rootEl.addEventListener('touchstart', onTouchstart)
        rootEl.addEventListener('touchmove', onTouchmove)
      }
    }

    return () => {
      if (rootEl) {
        if (!isMobile) {
          window.removeEventListener('keydown', onKeydown)
          rootEl.removeEventListener('wheel', onMousewheel)
        } else {
          rootEl.removeEventListener('touchstart', onTouchstart)
          rootEl.removeEventListener('touchmove', onTouchmove)
        }
      }
    }
  }, [touchEvent, props])

  const x = props.currentPage * -100
  const className = cx('horizontal-move-inner', {
    'horizontal-move-inner-sliding': props.isPaginationChanging
  })
  return (
    <section className="horizontal-move">
      <div
        ref={horizontalRef}
        className={className}
        style={{
          transform: `translateX(${x}%)`
        }}>
        {props.children}
      </div>
    </section>
  )
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
