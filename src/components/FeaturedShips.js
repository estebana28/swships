import React, { Component } from 'react';
import { ShipContext } from '../context';
import Loading from './Loading';
import Ship from './Ship';
import Title from './Title';


export default class FeaturedShips extends Component {
    static contextType = ShipContext;
    render() {
        let { loading, featuredShips: ships} = this.context;

        ships = ships.map(ship => {
            return <Ship key={ship.id} ship={ship} />;
        });


        return (
            <section className="featured-ships container">
                <Title title="featured ships" />
                <div className="featured-ships-center row">
                    {loading?<Loading/>:ships}
                </div>
            </section>
        );
    }
}
