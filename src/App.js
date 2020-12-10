import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import JoinGamePage from './pages/JoinGame/JoinGamePage';
import NewGamePage from './pages/NewGame/NewGamePage';

// Components
import Button from './components/Button/Button';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Link to='/new'>
            <Button>New game</Button>
          </Link>
          <Link to='/join'>
            <Button>Join game</Button>
          </Link>
          <div>Home</div>
        </Route>
        <Route exact path='/join'>
          <JoinGamePage />
        </Route>
        <Route exact path='/new'>
          <NewGamePage />
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
