import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
    background-color: #000;
    height: 16vh;
    display: flex;
    img {
        height: 10vh;
        margin: 3vh 3vw;
    }

    button {
        align-items: flex-end;
        right: 0;
        display: none;
    }
    ul {
        display: none;
    }

    li {
        text-decoration: none;
        list-style: none;
    }

    a {
        color: white;
    }
`;

export default class Navbar extends Component {
    state = {
        isOpen: true
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <NavbarWrapper>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Star wars logo"></img>
                    </Link>
                    <button type="button" onClick={this.handleToggle}>
                        <FaAlignRight />
                    </button>
                </div>
                <ul
                    className={
                        this.state.isOpen
                            ? "NavbarWrapper-links show-nav"
                            : "nav-links"
                    }
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ships">Ships</Link>
                    </li>
                </ul>
            </NavbarWrapper>
        );
    }
}
