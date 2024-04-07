import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import Background from '../Background/Background'
import FullCenter from '../../components/FullCenter/FullCenter'
import './area.scss'

function Area(props) {
  const areaEl = useRef(null)
  useEffect(() => {
    const element = areaEl.current
    if (element) {
      element.addEventListener('scroll', onScroll)
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', onScroll)
      }
    }
  }, [areaEl])

  const onScroll = function (event) {
    // on scrolling...
  }

  const className = cx('area', {
    [props.className]: props.className
  })
  return (
    <FullCenter className="loading">
      <Background
        lineActive={props.isLoaded}
        key="Background"
      />
      <section
        ref={areaEl}
        className={className}>
        {props.children}
      </section>
    </FullCenter>
  )
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
