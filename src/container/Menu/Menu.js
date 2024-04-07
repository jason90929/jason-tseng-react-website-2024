import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import MenuItem from './MenuItem'
import './menu.scss'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      pageList: []
    }

    this.toAbout = this.toAbout.bind(this)
    this.toPortfolio = this.toPortfolio.bind(this)
    this.toContact = this.toContact.bind(this)
  }

  componentDidMount () {
    this.setState(prevState => ({
      pageList: this.props.pageList
    }))
  }

  toAbout () {
    const aboutMePage = this.state.pageList.findIndex(page => page === 'about')
    this.props.setPage(aboutMePage)
  }

  toPortfolio () {
    const portfolioPage = this.state.pageList.findIndex(page => page === 'portfolio')
    this.props.setPage(portfolioPage)
  }

  toContact () {
    const contactPage = this.state.pageList.findIndex(page => page === 'contact')
    this.props.setPage(contactPage)
  }

  render () {
    const className = cx('menu', {
      'menu-loaded': this.props.isLoaded
    })
    const pageAbout = this.state.pageList[this.props.currentPage] === 'about'
    const pagePortfolio = this.state.pageList[this.props.currentPage] === 'portfolio'
    const pageContact = this.state.pageList[this.props.currentPage] === 'contact'
    return (
      <div className="menu-position">
        <ul className={className}>
          <MenuItem
            text="About"
            className={pageAbout ? 'menu-item-active' : ''}
            onClick={this.toAbout}
          />
          <MenuItem
            text="Portfolio"
            className={pagePortfolio ? 'menu-item-active' : ''}
            onClick={this.toPortfolio}
          />
          <MenuItem
            text="Contact"
            className={pageContact ? 'menu-item-active' : ''}
            onClick={this.toContact}
          />
        </ul>
      </div>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
