import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { isMobile } from '../../resources/utility'
import './double-color-hover-text.scss'

class DoubleColorHoverText extends PureComponent {
  static defaultProps = {
    className: '',
    text: 'Hover me.'
  }

  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
  }

  render () {
    const className = cx('double-color-hover-text-wrapper', {
      [this.props.className]: this.props.className,
      'hoverable': !isMobile
    })
    return (
      <div className={className}>
        <p className="double-color-hover-text--model">{this.props.text}</p>
        <div className="double-color-hover-text-outer">
          <p className="double-color-hover-text double-color-hover-text--sizing">{this.props.text}</p>
          <div className="double-color-hover-text-inner"><p className="double-color-hover-text double-color-hover-text--mask">{this.props.text}</p>
          </div>
        </div>
        <div className="double-color-hover-text-outer-second">
          <p className="double-color-hover double-color-hover-text--sizing">{this.props.text}</p>
          <div className="double-color-hover-text-inner">
            <p className="double-color-hover-text double-color-hover-text--mask">{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DoubleColorHoverText
