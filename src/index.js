import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import App from './App';
import Forum from './Forum';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route  path="/" component={App}>
    <Route path="/:forum" component={Forum}/>
  </Route>
</Router>,
  document.getElementById('root')
);
