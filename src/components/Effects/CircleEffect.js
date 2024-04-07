import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './circle-effect.scss'

class CircleEffect extends Component {
  static defaultProps = {
    progress: -1000, // from -1000 to 0
    color: '#22d8da',
    className: ''
  }

  static propTypes = {
    progress: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string
  }

  render () {
    const className = cx('circle', {
      [this.props.className]: this.props.className,
    })
    const style = {
      strokeDashoffset: this.props.progress
    }
    return (
      <svg
        className={className}
        version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-3 -3 256 256"
        xmlSpace="preserve">
        <path
          fill="none"
          style={style}
          stroke={this.props.color}
          d="M125,0 C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z">
        </path>
      </svg>
    )
  }
}

export default CircleEffect
