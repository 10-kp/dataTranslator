import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Data from './Components/DataTranslator';
import Scientist from './Components/DataScientist';
import Engineers from './Components/DataEngineer';
import Analyst from './Components/DataAnalyst';
import NavbarComp from './Components/NavbarComp';
import DataAnalytics from './Components/DataAnalytics';

function App() {
  return (
    <div class='App'>
      <BrowserRouter>
        <NavbarComp />
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
          <Route exact path='/DataAnalytics'>
            <DataAnalytics />
          </Route>
          {/* Use another way to render component */}
          <Route exact path='/DataAnalyst' component={Analyst} />
          <Data />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
