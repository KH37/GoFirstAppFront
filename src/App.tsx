import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
