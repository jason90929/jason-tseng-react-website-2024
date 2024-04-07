import { isMobile } from '../../resources/utility'
import cx from 'classnames'
import Btn from '../../components/Btn/Btn'
import Icon from '../../components/Icon/Icon'
import Stroke from '../../components/Effects/Stroke'
import readDetailIcon from '../../assets/images/home/read-detail.svg'
import './portfolio.scss'

function ReadDetailBtn(props) {
  const className = cx('btn-no-default', {
    [props.className]: props.className,
    'btn-stroke-hover-effect': !isMobile
  })
  return (
    <Btn
      className={className}
      onClick={props.onClick}>
      <Stroke className="portfolio-btn-stroke-padding">
        <p className="portfolio-btn-text">READ DETAIL</p>
        <Icon
          className="read-detail-icon"
          height="2em"
          width="2em"
          image={readDetailIcon}
        />
      </Stroke>
    </Btn>
  )
}

export default ReadDetailBtn
