import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import Email from '../../container/Email'
import Icon from '../../components/Icon/Icon'
import avatar from '../../assets/images/home/about/avatar.jpg'
import './second-area.scss'

class SecondArea extends Component {
  render () {
    const className = cx('second-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'about'
    })
    return (
      <Area
        className={className}>
        <article className="article">
          <div className="article-left">
            <h1 className="second-area-frame-1">
              About me
            </h1>
            <Icon
              width="100%"
              className="second-area-frame-2 hide-pc"
              style={{ paddingBottom: '100%' }}
              hasLazyload={true}
              image={avatar}
            />
            <p className="second-area-frame-3">
              My name is Jason Tseng and I have 4 years experience of frontend developer currently based in Taipei, Taiwan.
            </p>
            <p className="second-area-frame-4">
              Currently I'm at iStaging which is developing VR/AR platform, make a perfect user experience for consumer, get income from business
            </p>
            <p className="second-area-frame-5">
              I'm a strong with personal developing in frontend position, make a good structure code project.
            </p>
            <p className="second-area-frame-6">
              I have a good UX sense on developing projects, and sense of RWD, so I usually recommend UI designer a better UI display.
            </p>
            <p className="second-area-frame-7">
              I'm always open to all kind of offers - just drop me a line at <Email />
            </p>
          </div>
          <div className="article-right">
            <Icon
              className="second-area-frame-2"
              width="100%"
              style={{ paddingBottom: '100%' }}
              hasLazyload={true}
              image={avatar}
            />
          </div>
        </article>
      </Area>
    )
  }
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
)(SecondArea)
