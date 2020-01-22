import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from "webfontloader";
import {ShipProvider} from "./context"; 
import 'bootstrap/dist/css/bootstrap.min.css';


WebFont.load({
    google: {
        families: ['Press Start 2P', 'cursive']
    }
})

ReactDOM.render(
    <ShipProvider>        
        <Router>
            <App />
        </Router>
    </ShipProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
