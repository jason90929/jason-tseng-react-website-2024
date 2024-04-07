import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import pagination from '../../actions/pagination'
import './portfolio-switcher.scss'

function PortfolioSwitcher(props) {
  const scrollerRef = useRef(null)
  const [switcher, setSwitcher] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (scrollerRef.current) {
        const rect = scrollerRef.current.getBoundingClientRect()
        const elementTop = rect.top
        const elementHeight = rect.height
        const s = ((((window.innerHeight / 2) - elementTop) * 100) / elementHeight) > 0
        setSwitcher(s)
      }
    }
  
    document.addEventListener('scroll', onScroll)
    window.setTimeout(() => {
      onScroll()
    }, 0)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])
  
  // const toPrevPortfolio = () => {
  //   props.setPage(props.currentPage - 1)
  //   window.scrollTo(0, 0)
  //   props.onClickPrev()
  // }

  const toNextPortfolio = () => {
    props.setPage(props.currentPage + 1)
    window.scrollTo(0, 0)
    props.onClickNext()
  }

  const className = cx('portfolio-switcher', {
    [props.className]: props.className,
    'portfolio-switcher-active': switcher
  })
  return (
    <div
      className={className}
      ref={scrollerRef}>
      <div className="portfolio-switcher-inner">
        <a // eslint-disable-line
          role="button"
          onClick={toNextPortfolio}>
          Next
        </a>
      </div>
    </div>
  )
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
