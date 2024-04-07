import { useEffect, useState } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import Area from '../../container/Area/Area'
import Loading from '../../container/Loading/Loading'
import './innova-solutions.scss'

function InnovaSolutions(props) {
    const [filePaths, setFilePaths] = useState([])

  useEffect(() => {
    let imageContext = require.context('../../assets/images/tour-ring', true, /\.(png|jpe?g|svg)$/)
    const fp = []
    imageContext.keys().forEach(key => {
      fp.push(imageContext(key))
    })
    setFilePaths(fp)
  }, [])

  const className = cx('tour-ring-area', {
    'area-loaded': props.isLoaded
  })
  return [
    <Loading
      preloadData={filePaths}
      key="Loading"/>,
    <Area
      className={className}
      key="Area">
      <article className="tour-ring-area-article tour-ring-area-first">
        <h1>Experience</h1>
        <ul>
          <li>Developed distributed architecture using Golang and AWS services</li>
          <li>Successfully deployed 30+ projects to production ready stage</li>
          <li>Implemented read/write-heavy supported solutions</li>
          <li>Achieved 80% unit test coverage for all projects and included regression/load tests for API services</li>
          <li>Implemented log pruning to meet HIPAA compliance on CloudWatch</li>
          <li>Collaborated with team members across different timezones and accents</li>
          <li>Helped in code reviews and testing of tickets to ensure performance and acceptance criteria were met</li>
        </ul>
      </article>
    </Area>
  ]
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded
  }
}

export default connect(
  mapStateToProps
)(InnovaSolutions)
