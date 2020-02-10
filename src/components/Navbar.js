import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
    background-color: #000;
    height: 12vh;
    width: 100vw;
    display: flex;
    img {
        height: 8vh;
        margin: 2vh 2vw;
    }

    button {
        right: 0;
        display: none;
    }
    ul {
        display: none;
        width: 100%;
    }

    li {
        text-decoration: none;
        list-style: none;
    }

    a {
        color: white;
    }
    @media (min-width: 769px) {
        ul {
            display: flex;
            flex-direction: row;
            text-align: center;
            justify-content: flex-end;
            align-self: center;

            margin-right: 2rem;
        }
        li {
            margin: 0 1rem;
        }
        a {
            text-decoration: none;
            font-family: "work sans";
            font-size: 2rem;
            font-weight: bold;
        }
    }
    @media (min-width: 1440px) {
        ul {
        }
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
