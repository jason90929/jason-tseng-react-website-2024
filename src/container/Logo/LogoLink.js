import { connect } from 'react-redux'
import pagination from '../../actions/pagination'
import Icon from '../../components/Icon/Icon'
import Logo from './Logo'
import logoJOrange from '../../assets/images/home/logo/j-without-bg-orange.png'
import './logo-link.scss'
import { useNavigate } from 'react-router-dom'

function LogoLink (props) {
  const navigate = useNavigate()
  const toHomePage = () => {
    const homePage = props.pageList.findIndex(page => page === 'home')
    props.setPage(homePage)
    navigate('/')
  }

  let className = 'logo-link'
  let logoBgClass = 'logo-pulse-effect'
  let logoJClass = 'logo-j-rotate-effect'
  let logoJOrangeClass = 'load-progress logo-j-rotate-effect'
  let clipPath = ''
  if (props.isLoaded) {
    className += ' logo-link-to-corner'
    logoJOrangeClass += ' load-progress-finished'
    logoBgClass = ''
    logoJClass = ''
  } else {
    const progress = (props.currentLoading / props.maxLoading) * 100
    clipPath = `polygon(0 100%, 100% 100%, 100% ${100 - progress}%, 0 ${100 - progress}%)`
  }
  return (
    <a // eslint-disable-line
      className={className}
      role="button"
      onClick={toHomePage}>
      <Logo
        logoBgClass={logoBgClass}
        logoJClass={logoJClass}
        size="144px">
        <Icon
          className={logoJOrangeClass}
          style={{
            WebkitClipPath: clipPath,
            clipPath
          }}
          width="144px"
          height="144px"
          image={logoJOrange}
        />
      </Logo>
    </a>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLoading: state.loading.currentLoading,
    isLoaded: state.loading.isLoaded,
    maxLoading: state.loading.maxLoading,
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
)(LogoLink)
