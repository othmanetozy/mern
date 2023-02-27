//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Cars from './pages/Cars'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
          <Router>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cars' element={<Cars />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </Layout>
          </Router>
    </div>
  );
}

export default App;
