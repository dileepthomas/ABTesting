import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import App from '../App';
import Experiment from '../components/Experiment';
import ExpCreate from '../components/ExpCreate';
import ExpView from '../components/ExpView';
import Analytics from '../components/Analytics';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact={true} path={'/'} component={App} />
            <Route exact={true} path={'/experiment'} component={Experiment} />
            <Route exact={true} path={'/experiment/create'} component={ExpCreate} />
            <Route exact={true} path={'/experiment/view'} component={ExpView} />
            <Route exact={true} path={'/analytics'} component={Analytics} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Routes;
