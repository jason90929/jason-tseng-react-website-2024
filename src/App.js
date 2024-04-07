import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppComponent from './container/AppComponent'
import LogoLink from './container/Logo/LogoLink'
import Home from './pages/Home/Home'
import InnovaSolutions from './pages/InnovaSolutions/InnovaSolutions'
import Footer from './container/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <AppComponent>
        <LogoLink/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/innova-solutions" Component={InnovaSolutions}/>
        </Routes>
        <Footer/>
      </AppComponent>
    </BrowserRouter>
  );
}

export default App;
