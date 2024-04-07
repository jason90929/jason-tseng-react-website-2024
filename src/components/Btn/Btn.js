import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './btn.scss'

class Btn extends Component {
  static defaultProps = {
    className: '',
    type: 'button', // button, submit
    onClick: () => {},
    disabled: false,
    children: null
  }

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node
  }

  render () {
    const className = cx('btn', {
      [this.props.className]: this.props.className
    })
    return (
      <button
        type={this.props.type}
        className={className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Btn
