import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './modal.scss'

class Modal extends Component {
  static defaultProps = {
    closable: false,
    className: '',
    children: null
  }

  static propTypes = {
    closable: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  }

  constructor () {
    super()
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.modalKeydown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.modalKeydown)
  }

  modalKeydown (e) {
    if (e.keyCode === 27) { // 27 = esc
      this.closeModal()
    }
  }

  closeModal () {
    this.setState(prevState => ({
      active: false
    }))
  }

  render () {
    const className = cx('modal', {
      [this.props.className]: this.props.className
    })
    return (
      <div
        className={className}
        onClick={this.props.closable ? this.closeModal : null}>
        {this.props.children}
      </div>
    )
  }
}

export default Modal
