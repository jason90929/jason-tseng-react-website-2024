import React, { PureComponent } from 'react'
import Menu from '../Menu/Menu'
import './header.scss'

class Header extends PureComponent {
  render () {
    return (
      <header className="header">
        <Menu />
      </header>
    )
  }
}

export default Header
