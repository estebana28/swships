import React, { Component } from 'react';
import logo from "../images/logo.jpg"
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.state({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="Star wars logo"></img>
                    </Link>
                </div>
            </nav>
        )
    }
}
