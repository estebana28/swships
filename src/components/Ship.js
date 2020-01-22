import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../images/ships/default.jpg';
import PropTypes from 'prop-types';


const ShipWrapper = styled.article`
    display: flex;
    flex-direction: column;
    .ship-wrapper {
        height: 50vh;
    }
    img {
        width: 80vw;
        position: relative;

    }
    .ship-info {
        background-color: teal;
        position: absolute;
        border-bottom-right-radius: 10px;
        padding: 15px 10px 5px 10px;
        color: white;
        font-weight: 900;
        opacity: 0.7;
    }

    .ship-name {
        position: absolute;
        left: 50;
        color: white;
    }

    
`


export default function Ship({ ship }) {
    const { name ,slug, images, cost_in_credits} = ship;


    return (
        <ShipWrapper>
            <div className="ship-wrapper">
                <img src={images[0] || defaultImg } alt="single ship" />
                <div className="ship-info">
                    <h6>${cost_in_credits}</h6>
                    <p>brand new</p>
                </div>
                <Link to={`/ships/${slug}`}>Details</Link>
            </div>
            <p className="ship-name">{name}</p>

        </ShipWrapper> 
    )
}


Ship.propTypes = {
    ship:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        cost_in_credits:PropTypes.number.isRequired,

    })
}