import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../Components/Template/Analytics';
import Navigation from '../Components/Template/Navigation';
import SideBar from '../Components/Template/SideBar';
import ScrollToTop from '../Components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate='%s | Data Translator'
      defaultTitle='Data Translator'
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name='description' content={props.description} />
    </Helmet>
    <div id='wrapper'>
      <Navigation />
      <div id='main'>{props.children}</div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Data Translator.',
};

export default Main;
