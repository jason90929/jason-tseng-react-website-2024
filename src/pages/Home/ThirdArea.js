import { connect } from 'react-redux'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import Area from '../../container/Area/Area'
import Portfolio from '../../container/Portfolio/Portfolio'
import tourRingImage from '../../assets/images/home/portfolio/iStaging-TourRing.jpg'
import threeDDollHouseImage from '../../assets/images/home/portfolio/iStaging-3D-DollHouse.jpg'
import nongDesignImage from '../../assets/images/home/portfolio/Nong-Design.jpg'
import cnewsImage from '../../assets/images/home/portfolio/CNEWS.jpg'
import homeIntegrationImage from '../../assets/images/home/portfolio/Home-Integration.jpg'
import tourRingVideo from '../../assets/videos/tourring-preview-720.mp4'
import threeDDollHouseVideo from '../../assets/videos/3ddollhouse-preview-720.mp4'
import nongDesignVideo from '../../assets/videos/nong-design-preview-720.mp4'
import homeIntegrationVideo from '../../assets/videos/home-i-preview-720.mp4'
import cnewsVideo from '../../assets/videos/cnews-preview-720.mp4'
import './third-area.scss'

function ThirdArea (props) {
  const navigate = useNavigate()
  const experience = [{
    text: 'iStaging',
    title: 'TourRing',
    image: tourRingImage,
    video: tourRingVideo,
    color: '#BBEA86',
    onClick: () => {
      navigate('/tour-ring')
    }
  }, {
    text: 'iStaging',
    title: '3D DollHouse',
    image: threeDDollHouseImage,
    video: threeDDollHouseVideo,
    color: '#dac9ff',
    onClick: () => {
      navigate('/3d-dollhouse')
    }
  }, {
    text: 'Nong Design',
    title: 'Nong Design',
    image: nongDesignImage,
    video: nongDesignVideo,
    color: '#ffe500',
    onClick: () => {
      window.open('https://nongdesign.site/')
    }
  }, {
    text: 'Nong Design',
    title: 'CNEWS',
    image: cnewsImage,
    video: cnewsVideo,
    color: '#21D8DA',
    onClick: () => {
      window.open('https://cnews.com.tw/')
    }
  }, {
    text: 'Nong Design',
    title: 'Home Integration',
    image: homeIntegrationImage,
    video: homeIntegrationVideo,
    color: '#acacac',
    onClick: () => {
      window.open('http://home-i.com.tw/')
    }
  }]

  const startFrom = props.pageList.findIndex(page => page === 'portfolio')
  const shouldLoaded = props.isLoaded && props.pageList[props.currentPage] === 'portfolio'
  return experience.map((portfolio, index) => {
    const className = cx('third-area', {
      'area-loaded': shouldLoaded && props.currentPage - startFrom === index
    })
    return (
      <Area
        key={`ThirdArea${index}`}
        className={className}>
        <Portfolio
          text={portfolio.text}
          title={portfolio.title}
          image={portfolio.image}
          video={portfolio.video}
          color={portfolio.color}
          onClick={portfolio.onClick}
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          previewClass="third-area-frame-preview"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>
    )
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(ThirdArea)
