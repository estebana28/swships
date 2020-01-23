import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultImg from '../images/ships/default.jpg';



const ShipWrapper = styled.article`
    display: flex;
    flex-direction: column;
    .ship-wrapper {
        height: 50vh;
    }
    
    img {
        
        position: relative;
        width: 80vw;
        height: 60vh;
        border-radius: 50% / 10%;
    }
    img:before {
        position: absolute;
        border-radius: 5% / 50%;
    

    }

    .ship-name {
        margin: 0.5rem;
        width: 80vw;
        text-align: center;
        position: absolute;
        
        color: white;
        font-size: 1.5rem;
        font-weight: 800;

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
            <div className="ship-name">
                <p>{name}</p>
            </div>

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