import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './image-scroller.scss'

class ImageScroller extends Component {
  constructor () {
    super()

    this.state = {
      scrollerEl: null,
      positionY: 0
    }
  }

  static defaultProps = {
    className: '',
    image: '',
    color: ''
  }

  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string.isRequired,
    color: PropTypes.string
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
      let elementHeight = window.getComputedStyle(this.state.scroller).paddingBottom
      elementHeight = elementHeight.split('px')[0]
      const positionY = (((window.innerHeight / 2) - elementTop) * 100) / elementHeight
      this.setState(prevState => ({
        positionY
      }))
    }
  }

  render () {
    const className = cx('image-scroller', {
      [this.props.className]: this.props.className,
      'image-scroller-move-out-to-bottom': this.state.positionY <= -50,
      'image-scroller-move-out-to-top': this.state.positionY >= 150
    })
    const positionY = Math.max(0, Math.min(100, this.state.positionY))
    return (
      <div
        className={className}
        ref="scroller">
        <div
          className="image-scroller-color-block"
          style={{
            backgroundColor: this.props.color,
          }}>
        </div>
        <div
          className="image-scroller-bg"
          style={{
            backgroundPositionY: `${positionY}%`,
            backgroundImage: `url('${this.props.image}')`
          }}>
        </div>
      </div>
    )
  }
}

export default ImageScroller
