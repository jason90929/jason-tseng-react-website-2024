import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isMobile } from '../../resources/utility'
import cx from 'classnames'
import Icon from '../../components/Icon/Icon'
import ShowcaseBtn from './ShowcaseBtn'
import './portfolio.scss'

class Portfolio extends Component {
  static defaultProps = {
    text: '',
    title: '',
    image: '',
    video: '',
    color: '',
    onClick: '',
    textClass: '',
    titleClass: '',
    btnClass: '',
    previewClass: '',
    colorClass: ''
  }

  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    video: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    textClass: PropTypes.string,
    titleClass: PropTypes.string,
    btnClass: PropTypes.string,
    previewClass: PropTypes.string,
    colorClass: PropTypes.string
  }

  render () {
    const textClass = cx('portfolio-content-text', {
      [this.props.textClass]: this.props.textClass
    })
    const titleClass = cx({
      [this.props.titleClass]: this.props.titleClass
    })
    const previewClass = cx('portfolio-figure', {
      [this.props.previewClass]: this.props.previewClass
    })
    const colorClass = cx('portfolio-color-block', {
      [this.props.colorClass]: this.props.colorClass
    })
    return (
      <div className="portfolio">
        <div className="portfolio-content">
          <p className={textClass}>{this.props.text}</p>
          <div className={titleClass}>
            <h1 className="portfolio-content-title portfolio-pad-white portfolio-pad-white-active">
              {this.props.title}
            </h1>
          </div>
          <div className="portfolio-btn-position">
            <ShowcaseBtn
              className={this.props.btnClass}
              onClick={this.props.onClick}
            />
          </div>
        </div>
        <div
          className={colorClass}
          style={{ backgroundColor: this.props.color }}>
        </div>
        <figure className={previewClass}>
          {
            this.props.image ?
            <Icon
              className="portfolio-image"
              style={{ backgroundSize: 'cover' }}
              image={this.props.image}>
            </Icon> : null
          }
          {
            this.props.video && !isMobile ?
            <video
              ref="video"
              className="portfolio-video"
              src={this.props.video}
              preload="auto"
              autoPlay={true}
              loop={true}
              muted={true}>
            </video> : null
          }
        </figure>
      </div>
    )
  }
}

export default Portfolio
