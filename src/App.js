import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AllCards from './pages/AllCards/AllCards.jsx'
import CardState from './context/Cards/CardState';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import logo from './img/logo.png';
import Search from './pages/Search/Search.jsx';
import './App.css';

const App = () => {
  return (
    <CardState>
      <Container className='app-container' style={{ display: 'grid' }}>
        <Router>
          <div className='navbar-container'>
            <div className='nav-link'>
              <Link to='/'>
                <img src={logo} alt='Logo' />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to='/' className='nav-link'><span>Home</span></Link>
                </li>
                <li>
                  <Link to='/all-cards' className='nav-link'><span>All Cards</span></Link>
                </li>
                <li>
                  <Link to='/search' className='nav-link'><span>Search</span></Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/all-cards'>
              <AllCards />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Container>
    </CardState>
  );
}

export default App;
