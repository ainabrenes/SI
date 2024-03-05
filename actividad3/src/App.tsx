import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import inicio from './componentes/inicio';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
      <Route path="/" Component={inicio} />
      </Switch>
      

      </header>
    </div>
    </Router>
  );
}

export default App;
