import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar/Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/DataTranslator' activeStyle>
            Data Translator
          </NavLink>
          <NavLink to='/DataAnalytics' activeStyle>
            Data Analytics
          </NavLink>
          <NavLink to='/DataScientist' activeStyle>
            Data Scientist
          </NavLink>
          <NavLink to='/DataEngineer' activeStyle>
            Data Engineer
          </NavLink>
          <NavLink to='/DataAnalyst' activeStyle>
            Data Analyst
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
