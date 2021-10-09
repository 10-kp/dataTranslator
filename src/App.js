import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './layouts/Main';
import './App.css';
import './static/css/main.scss'; // All of our styles

// const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./Components/Home'));
const Data = lazy(() => import('./Components/DataTranslator'));
const Scientist = lazy(() => import('./Components/DataScientist'));
const Engineers = lazy(() => import('./Components/DataEngineer'));
const Analyst = lazy(() => import('./Components/DataAnalyst'));
const NavbarComp = lazy(() => import('./Components/NavbarComp'));
const DataAnalytics = lazy(() => import('./Components/DataAnalytics'));
// import Home from './Components/Home';
// import Data from './Components/DataTranslator';
// import Scientist from './Components/DataScientist';
// import Engineers from './Components/DataEngineer';
// import Analyst from './Components/DataAnalyst';
// import NavbarComp from './Components/NavbarComp';
// import DataAnalytics from './Components/DataAnalytics';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
