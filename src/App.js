import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Data from './Components/Data';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Home />

        <Data />
      </Switch>
    </Router>
  );
}

export default App;
