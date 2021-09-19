import React from 'react';

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
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Data' activeStyle>
            Data Translator
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to='/'></NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
