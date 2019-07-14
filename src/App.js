import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import NotFound from './containers/NotFound';
import Redirect from './containers/Redirect';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/:id" exact component={Redirect} />
        <Route path="/404" exact component={NotFound} />
      </Router>
    </div>
  );
}

export default App;
