import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './containers/SearchContainer'
import Home from './containers/HomeContainer'
import About from './containers/About'
import Dashboard from './containers/Dashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/search' component={Search}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
