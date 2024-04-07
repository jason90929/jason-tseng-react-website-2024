import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isMobile } from '../../resources/utility'
import cx from 'classnames'
import Btn from '../../components/Btn/Btn'
import Icon from '../../components/Icon/Icon'
import Stroke from '../../components/Effects/Stroke'
import seeShowcaseImage from '../../assets/images/home/see-showcase.svg'
import './portfolio.scss'

class ShowcaseBtn extends PureComponent {
  static defaultProps = {
    onClick: '',
    className: ''
  }

  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
  }

  render () {
    const className = cx('btn-no-default', {
      [this.props.className]: this.props.className,
      'btn-stroke-hover-effect': !isMobile
    })
    return (
      <Btn
        className={className}
        onClick={this.props.onClick}>
        <Stroke className="portfolio-btn-stroke-padding">
          <p className="portfolio-btn-text">SEE SHOWCASE</p>
          <Icon
            className="showcase-icon"
            height="2em"
            width="2em"
            image={seeShowcaseImage}
          />
        </Stroke>
      </Btn>
    )
  }
}

export default ShowcaseBtn
