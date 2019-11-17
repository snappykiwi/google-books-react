import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-materialize';
import Search from './pages/Search/Search';
import Save from './pages/Save/Save';
import NavbarComp from './components/Nav';
// import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/save" component={Save} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;
