import React from 'react';
import App from '../../App';
import test from '../../test';
import Hello from '../../Hello';
import Layout from '../Layout/Layout';
import GitPage from '../GitPage/GitPage';
import Home from '../Pages/Home';
import Footer from '../Footer/Footer';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class Routes extends React.Component {

  render() {
    return (
      <div className="routes-component">
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={GitPage}/>
            <Route path='test' component={test} />
            <Route path='layout' component={Layout} />
            <Route path='git' component={GitPage} />
            <Route path='home' component={Home} />
            <Route path='footer' component={Footer} />
          </Route>
        </Router>
      </div>
    );
  }
} 

export default Routes;