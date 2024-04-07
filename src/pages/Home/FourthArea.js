import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import Email from '../../container/Email'
import Icon from '../../components/Icon/Icon'
import codepenImage from '../../assets/images/home/contact/codepen.svg'
import githubImage from '../../assets/images/home/contact/github.svg'
import linkedinImage from '../../assets/images/home/contact/linkedin.svg'
import './fourth-area.scss'

class FourthArea extends Component {
  render () {
    const className = cx('fourth-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'contact'
    })
    return (
      <Area
        className={className}>
        <h1 className="fourth-area-frame-1">
          Contact
        </h1>
        <article className="fourth-area-article">
          <div className="article-left">
            <div className="about-inner">
              <p className="fourth-area-frame-2">
                <Email/>
              </p>
            </div>
          </div>
          <div className="article-right">
            <div className="about-color-block">
              <div className="about-inner">
                <h3 className="fourth-area-frame-3">
                  You can find me at these links.
                </h3>
                <br/>
                <p className="fourth-area-frame-4">
                  <a
                    href="https://github.com/jason90929"
                    className="contact-icon github"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub">
                    <Icon
                      height="1.6em"
                      width="1.6em"
                      image={githubImage}
                    />
                    <span>GitHub</span>
                  </a>
                </p>
                <p className="fourth-area-frame-5">
                  <a
                    href="https://www.linkedin.com/in/jason90929"
                    className="contact-icon linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn">
                    <Icon
                      height="1.6em"
                      width="1.6em"
                      image={linkedinImage}
                    />
                    <span>LinkedIn</span>
                  </a>
                </p>
                <p className="fourth-area-frame-6">
                  <a
                    href="https://codepen.io/jason90929/"
                    className="contact-icon codepen"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="CodePen">
                    <Icon
                      height="1.6em"
                      width="1.6em"
                      image={codepenImage}
                    />
                    <span>Codepen</span>
                  </a>
                </p>
              </div>
            </div>
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
)(FourthArea)
