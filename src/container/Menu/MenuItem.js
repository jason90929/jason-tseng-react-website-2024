import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DoubleColorHoverText from '../../components/Effects/DoubleColorHoverText'
import './menu-item.scss'

class MenuItem extends Component {
  static defaultProps = {
    className: '',
    text: '',
    onClick: () => {}
  }

  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const className = cx('menu-item', {
      [this.props.className]: this.props.className
    })
    return (
      <li className={className}>
        <a // eslint-disable-line
          role="button"
          onClick={this.props.onClick}>
          <DoubleColorHoverText
            className="menu-text"
            text={this.props.text}>
          </DoubleColorHoverText>
        </a>
      </li>
    )
  }
}

export default MenuItem
