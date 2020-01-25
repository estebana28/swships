import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImg from "../images/ships/default.jpg";

const ShipWrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin: 20px;
    box-sizing: border-box;

    $:hover {
        transition: all 0.3s linear;
    }

    .ship-wrapper {
        height: 50vh;
        width: 80vw;
        position: relative;
        $:hover {
            background: rgba(0, 0, 0, 0.8);
        }
    }

    .ship-wrapper .details {
        $:hover {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .details {
        border: 4px solid #d4af37;
        top: 50%;
        left: 50%;
        width: 40vw;
        font-size: 3rem;
        position: absolute;
        transform: scale(0);
        transition: all 0.3s linear;
        display: inline-block;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
            -10px -1px 15px 4px rgba(0, 0, 0, 0.19);
        box-shadow: 0px 10px 13px -7px #000000,
            -10px -1px 15px 4px rgba(0, 0, 0, 0.19);
        &:hover {
            opacity: 0.3;
        }
    }

    .ship-info {
        position: absolute;
        width: 150px;
        border: 3px solid #fff;
        border-radius: 0px 40px 0px 40px;
        background-color: #fff;
        color: #000;
        padding-top: 15px;
        margin: -10px 0 0 -50px;
        z-index: 1;
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
            -10px -1px 15px 4px rgba(0, 0, 0, 0.19);
        box-shadow: 0px 10px 13px -7px #000000,
            -10px -1px 15px 4px rgba(0, 0, 0, 0.19);
        font-family: "Press Start 2P";
        font-size: 0.8rem;
    }

    .ship-name {
        margin: 0.5rem;
        width: 80vw;
        text-align: center;
        position: absolute;

        color: white;
        font-size: 1.8rem;
        font-weight: 800;
    }
`;

export default function Ship({ ship }) {
    const { name, slug, images, cost_in_credits } = ship;

    return (
        <ShipWrapper>
            <div className="ship-wrapper">
                <img src={images[0] || defaultImg} alt="single ship" />
                <div className="ship-info">
                    <h6>${cost_in_credits}</h6>
                    <p>brand new</p>
                </div>
            </div>
            <Link className="details" to={`/ships/${slug}`}>
                details
            </Link>
            <div className="ship-name">
                <p>{name}</p>
            </div>
        </ShipWrapper>
    );
}

Ship.propTypes = {
    ship: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        cost_in_credits: PropTypes.number.isRequired
    })
};
