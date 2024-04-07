import React, { Component } from 'react'
import './main.scss'

class Main extends Component {
  render () {
    return (
      <main
        ref="main"
        className="main">
        {this.props.children}
      </main>
    )
  }
}

export default Main
