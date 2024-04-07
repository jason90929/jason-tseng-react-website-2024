import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './stroke.scss'

class Stroke extends Component {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const className = cx('stroke', {
      [this.props.className]: this.props.className,
    })
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default Stroke
