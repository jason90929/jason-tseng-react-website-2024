import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import Email from '../Email'
import PortfolioNavigator from '../Portfolio/PortfolioNavigator'
import './footer.scss'

class Footer extends Component {
  render () {
    const className = cx('footer', {
      'footer-loaded': this.props.isLoaded
    })
    return (
      <footer
        className={className}>
        <Email />
        <PortfolioNavigator />
      </footer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded
  }
}

export default connect(
  mapStateToProps
)(Footer)
