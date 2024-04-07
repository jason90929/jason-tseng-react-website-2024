import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppComponent from './container/AppComponent'
import LogoLink from './container/Logo/LogoLink'
import Home from './pages/Home/Home'
import TourRing from './pages/TourRing/TourRing'
import ThreeDDollhouse from './pages/ThreeDDollhouse/ThreeDDollhouse'
import Footer from './container/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <AppComponent>
        <LogoLink/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/tour-ring" Component={TourRing}/>
          <Route path="/3d-dollhouse" Component={ThreeDDollhouse}/>
        </Routes>
        <Footer/>
      </AppComponent>
    </BrowserRouter>
  );
}

export default App;
