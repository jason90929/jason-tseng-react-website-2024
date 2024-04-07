import React, { PureComponent } from 'react'
import FirstArea from './FirstArea'
import SecondArea from './SecondArea'
import ThirdArea from './ThirdArea'
import FourthArea from './FourthArea'
import Header from '../../container/Header/Header'
import Aside from '../../container/Aside/Aside'
import HorizontalMove from '../../container/HorizontalMove/HorizontalMove'
import Loading from '../../container/Loading/Loading'
import { isMobile } from '../../resources/utility'
import Main from '../../container/Main/Main'

class Home extends PureComponent {
  constructor () {
    super()

    this.state = {
      filePaths: []
    }
  }

  componentWillMount () {
    let imageContext = require.context('../../assets/images/home', true, /\.(png|jpe?g|svg)$/)
    const filePaths = []
    imageContext.keys().forEach(key => {
      filePaths.push(imageContext(key))
    })
    if (!isMobile) {
      let videoContext = require.context('../../assets/videos', true, /\.mp4$/)
      videoContext.keys().forEach(key => {
        filePaths.push(videoContext(key))
      })
    }
    this.setState(prevState => ({
      filePaths
    }))
  }

  render () {
    return [
      <Loading
        preloadData={this.state.filePaths}
        key="Loading"/>,
      <Header key="Header"/>,
      <Aside key="Aside"/>,
      <Main
        className="main"
        key="Main">
        <HorizontalMove key="HorizontalMove">
          <FirstArea/>
          <SecondArea/>
          <ThirdArea/>
          <FourthArea/>
        </HorizontalMove>
      </Main>
    ]
  }
}

export default Home
