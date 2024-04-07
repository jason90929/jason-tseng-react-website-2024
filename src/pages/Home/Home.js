import React, { useEffect, useState } from 'react'
import FirstArea from './FirstArea'
import SecondArea from './SecondArea'
import ThirdArea from './ThirdArea'
import FourthArea from './FourthArea'
import Header from '../../container/Header/Header'
import Aside from '../../container/Aside/Aside'
import HorizontalMove from '../../container/HorizontalMove/HorizontalMove'
import Loading from '../../container/Loading/Loading'
import Main from '../../container/Main/Main'

function Home(props) {
  const [filePaths, setFilePaths] = useState([])
  useEffect(() => {
    let imageContext = require.context('../../assets/images/home', true, /\.(png|jpe?g|svg)$/)
    const fp = []
    imageContext.keys().forEach(key => {
      fp.push(imageContext(key))
    })
    setFilePaths(fp)
  }, [])

  return [
    <Loading
      preloadData={filePaths}
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

export default Home
