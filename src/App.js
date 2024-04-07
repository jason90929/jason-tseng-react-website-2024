import { Router, Route } from 'react-router-dom'
import AppComponent from './container/AppComponent'
import LogoLink from './container/Logo/LogoLink'
import Home from './pages/Home/Home'
import TourRing from './pages/TourRing/TourRing'
import ThreeDDollhouse from './pages/ThreeDDollhouse/ThreeDDollhouse'
import Footer from './container/Footer/Footer'

function App() {
  return (
    <Router history={this.props.history}>
      <AppComponent>
        <LogoLink/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tour-ring" component={TourRing}/>
        <Route exact path="/3d-dollhouse" component={ThreeDDollhouse}/>
        <Footer/>
      </AppComponent>
    </Router>
  );
}

export default App;
