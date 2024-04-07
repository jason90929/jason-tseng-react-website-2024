import { connect } from 'react-redux'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import Email from '../../container/Email'
import Icon from '../../components/Icon/Icon'
import avatar from '../../assets/images/home/about/Jason Tseng - Avatar.jpg'
import './second-area.scss'

function SecondArea(props) {
  const className = cx('second-area', {
    'area-loaded': props.isLoaded && props.pageList[props.currentPage] === 'about'
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
            I'm experienced in Golang, Node.js, JavaScript, and React.
          </p>
          <p className="second-area-frame-4">
            I develop distributed architecture via Golang and AWS services.
          </p>
          <p className="second-area-frame-5">
            I make smooth websites, or CRM systems, interactive UI, with high performance.
          </p>
          <p className="second-area-frame-6">
            I contributed for hired companies for build up mature products to help them achieve a great success.
          </p>
          <p className="second-area-frame-7">
            You can reach me via this email: <Email />
          </p>
        </div>
        <div className="article-right">
          <Icon
            className="second-area-frame-2 circle"
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
