import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../components/Icon/Icon'
import logoJ from '../../assets/images/home/logo/j-without-bg.png'
import logoBg from '../../assets/images/home/logo/bg.png'
import './logo.scss'

class Logo extends Component {
  static defaultProps = {
    logoBgClass: '',
    logoJClass: '',
    size: '36px'
  }

  static propTypes = {
    logoBgClass: PropTypes.string,
    logoJClass: PropTypes.string,
    size: PropTypes.string
  }

  render () {
    return (
      <div className="logo">
        <Icon
          className={this.props.logoBgClass}
          height={this.props.size}
          width={this.props.size}
          image={logoBg}>
        </Icon>
        <Icon
          className={this.props.logoJClass}
          height={this.props.size}
          width={this.props.size}
          image={logoJ}>
        </Icon>
        {this.props.children}
      </div>
    )
  }
}

export default Logo
