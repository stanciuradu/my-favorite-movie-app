import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie' component={Movie} />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
