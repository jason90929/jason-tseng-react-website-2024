import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './full-center.scss'

class FullCenter extends Component {
  static defaultProps = {
    className: '',
    direction: 'row' // row, column
  }

  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string,
  }

  render () {
    const className = cx('full center', {
      [this.props.className]: this.props.className,
      'flex-row': this.props.direction === 'row',
      'flex-column': this.props.direction === 'column'
    })
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default FullCenter
