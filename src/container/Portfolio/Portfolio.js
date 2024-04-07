import React, { useRef } from 'react'
import { isMobile } from '../../resources/utility'
import cx from 'classnames'
import Icon from '../../components/Icon/Icon'
import ShowcaseBtn from './ShowcaseBtn'
import './portfolio.scss'

function Portfolio(props) {
  const videoRef = useRef()
  const textClass = cx('portfolio-content-text', {
    [props.textClass]: props.textClass
  })
  const titleClass = cx({
    [props.titleClass]: props.titleClass
  })
  const previewClass = cx('portfolio-figure', {
    [props.previewClass]: props.previewClass
  })
  const colorClass = cx('portfolio-color-block', {
    [props.colorClass]: props.colorClass
  })
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <p className={textClass}>{props.text}</p>
        <div className={titleClass}>
          <h1 className="portfolio-content-title portfolio-pad-white portfolio-pad-white-active">
            {props.title}
          </h1>
        </div>
        <div className="portfolio-btn-position">
          <ShowcaseBtn
            className={props.btnClass}
            onClick={props.onClick}
          />
        </div>
      </div>
      <div
        className={colorClass}
        style={{ backgroundColor: props.color }}>
      </div>
      <figure className={previewClass}>
        {
          props.image ?
          <Icon
            className="portfolio-image"
            style={{ backgroundSize: 'cover' }}
            image={props.image}>
          </Icon> : null
        }
        {
          props.video && !isMobile ?
          <video
            ref={videoRef}
            className="portfolio-video"
            src={props.video}
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

export default Portfolio
