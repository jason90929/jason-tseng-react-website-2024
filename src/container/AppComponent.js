import React from 'react'
import PropTypes from 'prop-types'

class AppComponent extends React.Component {
  render () {
    return this.props.children
  }
}

AppComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppComponent
