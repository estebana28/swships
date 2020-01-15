import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/ships/default.jpg';


export default function Ship({ ship }) {
    const { name ,slug, images, cost_in_credits} = ship;


    return (
        <article className="ship">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt="single ship" />
                <div className="price-tag">
                    <h6>${cost_in_credits}</h6>
                    <p>brand new</p>
                </div>
                <Link to={`/ships/${slug}`} className="btn-primary ship-link">Features</Link>
            </div>

        </article> 
    )
}
