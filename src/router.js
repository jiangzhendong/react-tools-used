import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Editor from './routes/Editor'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/editor" exact component={Editor} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
