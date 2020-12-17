// Node modules
import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import { io } from 'socket.io-client';

// Helpers
import { SOCKET_SERVER_URL } from './helpers/constants';

// Styles
import './App.css';

// Pages
import JoinGamePage from './pages/JoinGame/JoinGamePage';
import HomePage from './pages/Home/HomePage';
import GameRoom from './pages/GameRoom/GameRoom';

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io(SOCKET_SERVER_URL))
  }, [])

  if (!socket) {
    return <>Loading...</>
  }

  return (
      <Switch>
        <Route path="/" exact>
          <HomePage socket={socket}/>
        </Route>
        <Route path="/play/:roomCode" exact>
          <GameRoom socket={socket}/>
        </Route>
        <Route exact path='/join'>
          <JoinGamePage socket={socket}/>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
  );
}

export default App;
