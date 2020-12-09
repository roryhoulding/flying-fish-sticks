import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Button from './components/button';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Button>Join game</Button>
          <div>Home</div>
        </Route>
        <Route path="/new" exact>
          <div>New game</div>
        </Route>
        <Route path="/join" exact>
          <div>Join a game</div>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
