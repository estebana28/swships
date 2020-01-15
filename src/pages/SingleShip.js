import React, { Component } from 'react';
import defaultBcg from '../images/bcg.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ShipContext} from '../context';

export default class SingleShip extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = ShipContext;



    render() {

        const { getShip } = this.context;
        const ship = getShip(this.state.slug);

        if (!ship) {
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/ships' className="btn-primary">
                    back to rooms
                    </Link>
                </div>
            );
        }

        const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, images} = ship;
        return (
            
            <Hero hero='shipsHero'>
                <Banner title={`${name}`}>
                    <Link to='/ships' className="btn-primary">back to rooms</Link>
                </Banner>
            </Hero>
        )
    }
}

