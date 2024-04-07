import React, { PureComponent } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { isMobile } from '../../resources/utility'
import Area from '../../container/Area/Area'
import Loading from '../../container/Loading/Loading'
import ImageScroller from '../../container/ImageScroller/ImageScroller'
import video from '../../assets/videos/tourring-preview-720.mp4'
import threeDDollhouseMenuImage from '../../assets/images/3d-dollhouse/3d-dollhouse-menu.jpg'
import threeDDollhouseMenuMobileImage from '../../assets/images/3d-dollhouse/3d-dollhouse-menu-mobile.jpg'
import threeDDollhouseBirdviewMobileImage from '../../assets/images/3d-dollhouse/3d-dollhouse-birdview-mobile.jpg'
import threeDDollhousePersonViewImage from '../../assets/images/3d-dollhouse/3d-dollhouse-person-view.jpg'
import threeDDollhousePersonViewMobileImage from '../../assets/images/3d-dollhouse/3d-dollhouse-person-view-mobile.jpg'
import './three-d-dollhouse.scss'

class ThreeDDollhouse extends PureComponent {
  constructor () {
    super()

    this.state = {
      filePaths: []
    }
  }

  componentWillMount () {
    let imageContext = require.context('../../assets/images/3d-dollhouse', true, /\.(png|jpe?g|svg)$/)
    const filePaths = []
    imageContext.keys().forEach(key => {
      filePaths.push(imageContext(key))
    })
    if (!isMobile) {
      filePaths.push(video)
    }
    this.setState(prevState => ({
      filePaths
    }))
  }

  render () {
    const className = cx('three-d-dollhouse-area', {
      'area-loaded': this.props.isLoaded
    })
    return [
      <Loading
        preloadData={this.state.filePaths}
        key="Loading"/>,
      <Area
        className={className}
        key="Area">
        <article className="three-d-dollhouse-area-article three-d-dollhouse-area-first">
          <h1>3D DollHouse</h1>
          <h2>iStaging</h2>
          <br/>
          <p>Frontend development: Jason Tseng, Ray Chen, Felix Chang</p>
          <br/>
          <p>UI design: Sariel Lin</p>
          <br/>
          <p>
            Launch product:&nbsp;
            <a href="http://3d-dollhouse.avosapps.us/scene/62cb3510-6708-4f62-94c3-f9936db7e20b">
              http://3d-dollhouse.avosapps.us/scene/62cb3510-6708-4f62-94c3-f9936db7e20b
            </a>
            <br/>
            Fetch 3D objects, camera rotation and position. auto render but the project needs to move camera smoothly.
          </p>
        </article>
        <div className="three-d-dollhouse-area-scroller">
          <ImageScroller
            image={threeDDollhouseMenuImage}
            color="#dac9ff">
          </ImageScroller>
        </div>
        <div className="three-d-dollhouse-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={threeDDollhouseMenuMobileImage}
            color="#dac9ff">
          </ImageScroller>
        </div>
        <div className="three-d-dollhouse-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={threeDDollhouseBirdviewMobileImage}
            color="#dac9ff">
          </ImageScroller>
        </div>
        <div className="three-d-dollhouse-area-scroller">
          <ImageScroller
            image={threeDDollhousePersonViewImage}
            color="#dac9ff">
          </ImageScroller>
        </div>
        <div className="three-d-dollhouse-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={threeDDollhousePersonViewMobileImage}
            color="#dac9ff">
          </ImageScroller>
        </div>
        <div className="three-d-dollhouse-area-last">
        </div>
      </Area>
    ]
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded
  }
}

export default connect(
  mapStateToProps
)(ThreeDDollhouse)
