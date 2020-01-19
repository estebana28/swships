import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/ships/default.jpg';
import PropTypes from 'prop-types';


export default function Ship({ ship }) {
    const { name ,slug, images, cost_in_credits} = ship;


    return (
        <article className="ship col-md-3">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt="single ship" />
                <div className="price-tag">
                    <h6>${cost_in_credits}</h6>
                    <p>brand new</p>
                </div>
                <Link to={`/ships/${slug}`} className="btn-primary ship-link">Details</Link>
            </div>
            <p className="ship-info">{name}</p>

        </article> 
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