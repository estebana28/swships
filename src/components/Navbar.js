import React, { Component } from 'react';
import logo from "../images/logo.jpg"
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state = {
        isOpen:false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <img className="navbar-logo" src={logo} alt="Star wars logo"></img>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ships">Ships</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
