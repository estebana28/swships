import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Ships from "./pages/Ships";
import SingleShip from "./pages/SingleShip";
import Error from "./pages/Error";

import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/ships" component={Ships} />
        <Route exact path="/ships/:theforce" component={SingleShip} />
        <Route component={Error} />

      </Switch>

    </div>
  );
}

export default App;
