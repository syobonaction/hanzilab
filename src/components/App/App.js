import React from 'react';
import Header from '../Header/Header';
import Home from '../../views/Home';
import Study from '../../views/Study';
import NotFound from '../../views/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeServer } from '../../api/cardApi';
import './App.css';

makeServer();

function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid">
      <Header />
      <div className="App-body">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/study' component={Study} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;