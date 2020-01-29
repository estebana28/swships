import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImg from "../images/ships/default.jpg";
import { memo } from "react";

const ShipWrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin: 40px;
    box-sizing: border-box;

    .ship-wrapper {
        height: 40vh;
        width: 80vw;
        position: relative;
        &:hover {
            img {
                background: rgba(0, 0, 0, 0.8);
                opacity: 0.4;
            }
            .ship-name {
                color: black;
                text-shadow: 2px 2px 8px goldenrod;
            }
            .details {
                transform: scale(1);
                opacity: 1;
                color: black;
                text-shadow: 2px 2px 8px goldenrod;
            }
        }
    }

    .details {
        border: 4px solid goldenrod;
        align-self: center;
        top: 40%;
        width: 40vw;
        font-size: 4rem;
        position: absolute;
        transition: all 0.5s linear;
        display: inline-block;
        color: white;
        text-decoration: none;
        transform: scale(0);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
            10px 1px 15px -5px rgba(0, 0, 0, 0.19);
        box-shadow: 0px 10px 13px -7px #000000,
            10px 1px 15px -5px rgba(0, 0, 0, 0.19);
    }

    .ship-info {
        position: absolute;
        width: 180px;
        border: 3px solid #000;
        border-radius: 40px 40px 0px 40px;
        background-color: #000;
        color: white;
        opacity: 0.8;
        margin: -50px 0 0 -90px;
        z-index: 1;
        -webkit-box-shadow: 0px 2px 13px -7px #000000,
            10px 1px 15px 4px rgba(0, 0, 0, 0.19);
        box-shadow: 0px 2px 13px -7px #000000,
            10px 1px 15px 4px rgba(0, 0, 0, 0.19);
        font-family: "Press Start 2P";
        h6 {
            font-size: 1rem;
            margin: 20px 0 10px 0;
            text-align: center;
        }
    }

    .ship-name {
        margin-top: -1rem;
        width: 80vw;
        text-align: center;
        position: absolute;

        color: white;
        font-size: 2rem;
        font-weight: 900;
    }

    @media (min-width: 1441px) {
        .ship-wrapper {
            width: 25vw;
        }
    }
`;

const Ship = memo(({ ship }) => {
    const { name, slug, images, cost_in_credits } = ship;

    return (
        <ShipWrapper>
            <div className="ship-wrapper">
                <img src={images[0] || defaultImg} alt="single ship" />
                <div className="ship-info">
                    <h6>${cost_in_credits}</h6>
                    <p>brand new</p>
                </div>
                <div className="ship-name">
                    <p>{name}</p>
                </div>
                <Link className="details" to={`/ships/${slug}`}>
                    details
                </Link>
            </div>
        </ShipWrapper>
    );
});

Ship.propTypes = {
    ship: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        cost_in_credits: PropTypes.string.isRequired
    })
};

export default Ship;
