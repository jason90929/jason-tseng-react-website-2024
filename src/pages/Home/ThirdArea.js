import { connect } from 'react-redux'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import Area from '../../container/Area/Area'
import Portfolio from '../../container/Portfolio/Portfolio'
import './third-area.scss'

function ThirdArea (props) {
  const navigate = useNavigate()
  const experience = [{
    company: 'Innova Solutions',
    title: 'Senior Software Engineer',
    subtitle: 'Jul 2021 - present',
    description: 'JavaScript, React, Golang, AWS, Terraform, Newman, k6',
    color: '#88c1ef',
    onClick: () => {
      navigate('/innova-solutions')
    }
  }, {
    company: 'adGeek, Cyntelli',
    title: 'Senior Frontend Developer',
    subtitle: 'Jun 2019 - Jun 2021',
    description: 'JavaScript, React, Vue, Cypress, Jest',
    color: '#b488e0',
    // onClick: () => {
    //   navigate('/adgeek-cyntelli')
    // }
  }, {
    company: 'iStaging',
    title: 'Frontend Developer',
    subtitle: 'Feb 2017 - Jun 2019',
    description: 'JavaScript, React, Vue, Three.js, AFrame, Krpano, WebRTC, Agora, Firebase',
    color: '#FAA8AE',
    // onClick: () => {
    //   navigate('/istaging')
    // }
  }, {
    company: 'Nong Design',
    title: 'Web Developer',
    subtitle: 'May 2016 - Jan 2017',
    description: 'Completed development of 9 customized websites and published them online',
    color: '#bababa'
  }, {
    company: 'Wethink',
    title: 'Software Engineer',
    subtitle: 'Aug 2014 - Apr 2016',
    description: 'Developed and maintained projects using JavaScript and AngularJS',
    color: '#7c96a8',
  }]

  const startFrom = props.pageList.findIndex(page => page === 'portfolio')
  const shouldLoaded = props.isLoaded && props.pageList[props.currentPage] === 'portfolio'
  return experience.map((portfolio, index) => {
    const className = cx('third-area', {
      'area-loaded': shouldLoaded && props.currentPage - startFrom === index
    })
    return (
      <Area
        key={`ThirdArea${index}`}
        className={className}>
        <Portfolio
          company={portfolio.company}
          title={portfolio.title}
          subtitle={portfolio.subtitle}
          description={portfolio.description}
          color={portfolio.color}
          onClick={portfolio.onClick}
          companyClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          previewClass="third-area-frame-preview"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>
    )
  })
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
)(ThirdArea)
