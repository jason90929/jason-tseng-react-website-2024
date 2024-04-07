import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './background.scss'

class Background extends Component {
  static defaultProps = {
    lineActive: false
  }

  static propTypes = {
    lineActive: PropTypes.bool
  }

  render () {
    const lineClass = cx('line', {
      'line-active': this.props.lineActive
    })
    return (
      <div className="background">
        <div className="line-container">
          <span className={lineClass} />
          <span className={lineClass} />
          <span className={lineClass} />
          <span className={lineClass} />
          <span className={lineClass} />
          <span className={lineClass} />
        </div>
      </div>
    )
  }
}

export default Background
