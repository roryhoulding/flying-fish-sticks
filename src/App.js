// Node modules
import { useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import { io } from 'socket.io-client';

// Helpers
import { SOCKET_SERVER_URL } from './helpers/constants';

// Styles
import './App.css';

// Pages
import JoinGamePage from './pages/JoinGame/JoinGamePage';
import HomePage from './pages/Home/HomePage';
import Game from './pages/Game/Game';

function App() {
  const socket = io(SOCKET_SERVER_URL);
  const history = useHistory();

  socket.on('createdNewGameRoom', (roomCode) => {
    history.push(`/play/${roomCode}`);
  });

  return (
      <Switch>
        <Route path="/" exact>
          <HomePage socket={socket}/>
        </Route>
        <Route path="/play/:roomCode" exact>
          <Game socket={socket}/>
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
