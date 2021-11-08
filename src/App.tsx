import React from 'react';

import './styles/global.css';

import Routes from './routes';
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes/>
    <Router>
      <Switch>
        <Route path="/"/>
      </Switch>
    </Router>
    </>
  );
}

export default App;