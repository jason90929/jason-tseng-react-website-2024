import PropTypes from 'prop-types'

function AppComponent(props) {
  return props.children
}

AppComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppComponent
