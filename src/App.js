import React from "react";
import "./index.css";

import Home from "./pages/Home";
import Ships from "./pages/Ships";
import SingleShip from "./pages/SingleShip";
import Error from "./pages/Error";

import { HashRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
    return (
        <HashRouter basename="/">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ships" component={Ships} />
                <Route exact path="/ships/:slug" component={SingleShip} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    );
}

export default App;
