import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { isMobile } from '../../resources/utility'
import Area from '../../container/Area/Area'
import Loading from '../../container/Loading/Loading'
import ImageScroller from '../../container/ImageScroller/ImageScroller'
import video from '../../assets/videos/tourring-preview-720.mp4'
import landingPageImage from '../../assets/images/tour-ring/landing-page.jpg'
import landingPageMobileImage from '../../assets/images/tour-ring/landing-page-mobile.jpg'
import communityImage from '../../assets/images/tour-ring/community.jpg'
import communityMobileImage from '../../assets/images/tour-ring/community-mobile.jpg'
import lectureRoomImage from '../../assets/images/tour-ring/lecture-room.jpg'
import lectureRoomMobileImage from '../../assets/images/tour-ring/lecture-room-mobile.jpg'
import virtualTourImage from '../../assets/images/tour-ring/virtual-tour.jpg'
import virtualTourMobileImage from '../../assets/images/tour-ring/virtual-tour-mobile.jpg'
// import landingPageMobileImage from './img/landing-page-mobile.jpg'
import './tour-ring.scss'
import PortfolioSwitcher from '../../container/PortfolioSwitcher/PortfolioSwitcher'

function TourRing(props) {
    const [filePaths, setFilePaths] = useState([])

  useEffect(() => {
    let imageContext = require.context('../../assets/images/tour-ring', true, /\.(png|jpe?g|svg)$/)
    const fp = []
    imageContext.keys().forEach(key => {
      fp.push(imageContext(key))
    })
    if (!isMobile) {
      fp.push(video)
    }
    setFilePaths(fp)
  }, [])

  const navigate = useNavigate()
  const onClickNext = () => {
    navigate('/3d-dollhouse')
  }

  const className = cx('tour-ring-area', {
    'area-loaded': props.isLoaded
  })
  return [
    <Loading
      preloadData={filePaths}
      key="Loading"/>,
    <Area
      className={className}
      key="Area">
      <article className="tour-ring-area-article tour-ring-area-first">
        <h1>TourRing</h1>
        <h2>iStaging</h2>
        <br/>
        <p>Frontend development: Jason Tseng, Kevin Hu, Loofabu Chang, Blacky Chen, Ray Chen, Felix Chang</p>
        <br/>
        <p>UI design: Zoi Zhou, Kendra Chen</p>
        <br/>
        <p>
          Launch product:&nbsp;
          <a
            href="https://tourring.istaging.com/ab5744d6-4fd6-4ce8-b1fd-dc4bc1a5ff7d"
            target="_blank"
            rel="noopener noreferrer">
            https://tourring.istaging.com/ab5744d6-4fd6-4ce8-b1fd-dc4bc1a5ff7d
          </a>
          <br/>
          It will go to call the real estate agent, I recommend just look samples as below.
        </p>
      </article>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          image={landingPageImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          className="image-scroller-mobile"
          image={landingPageMobileImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          image={communityImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          className="image-scroller-mobile"
          image={communityMobileImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          image={lectureRoomImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          className="image-scroller-mobile"
          image={lectureRoomMobileImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          image={virtualTourImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-scroller">
        <ImageScroller
          className="image-scroller-mobile"
          image={virtualTourMobileImage}
          color="#BBEA86">
        </ImageScroller>
      </div>
      <div className="tour-ring-area-last">
        <div className="tour-ring-area-links">
          <em>Some introduction of TourRing:</em>
          <a
            href="https://www.youtube.com/watch?v=DmBkWe-g07A"
            target="_blank"
            rel="noopener noreferrer">
            TourRing 看房篇
          </a>
          <a
            href="https://www.youtube.com/watch?v=WfK87CNcvhM"
            target="_blank"
            rel="noopener noreferrer">
            TourRing
          </a>
          <a
            href="https://www.youtube.com/watch?v=zbYUZl02rzc"
            target="_blank"
            rel="noopener noreferrer">
            TourRing FR
          </a>
        </div>
      </div>
      <PortfolioSwitcher
        key="PortfolioSwitcher"
        onClickNext={onClickNext}
      />
    </Area>
  ]
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded
  }
}

export default connect(
  mapStateToProps
)(TourRing)
