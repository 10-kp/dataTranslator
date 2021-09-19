import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Data from './Components/DataTranslator';
import Scientist from './Components/DataScientist';
import Engineers from './Components/DataEngineer';
import Analyst from './Components/DataAnalyst';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Use Switch */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Data Translator'>
          <Data />
        </Route>
        <Route exact path='/DataScientist'>
          <Scientist />
        </Route>
        <Route exact path='/DataEngineer'>
          <Engineers />
        </Route>
        {/* Use another way to render component */}
        <Route exact path='/DataAnalyst' component={Analyst} />
        <Data />
      </Switch>
    </Router>
  );
}

export default App;
