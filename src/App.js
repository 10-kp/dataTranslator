import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Data from './Components/DataTranslator';
import Scientist from './Components/DataScientist';
import Engineers from './Components/DataEngineer';
import Design from './Components/UxDesign';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Data Translator' component={Data} />
        <Route exact path='/DataScientist' component={Scientist} />
        <Route exact path='/DataEngineer' component={Engineers} />
        <Route exact path='/Designers' component={Design} />
        <Data />
      </Switch>
    </Router>
  );
}

export default App;
