import React, { Component } from 'react';
import { ShipContext } from '../context';
import Loading from './Loading';


export default class FeaturedShips extends Component {
    static contextType = ShipContext
    render() {
        const {featuredShips : ships} = this.context;
        console.log(ships);
        
        return (
            <div>
                Hello from features ships

                <Loading />
            </div>
        );
    }
}
