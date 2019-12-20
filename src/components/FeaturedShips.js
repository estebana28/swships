import React, { Component } from 'react';
import { ShipContext } from '../context';


export default class FeaturedShips extends Component {
    static contextType = ShipContext
    render() {
        return (
            <div>
                Hello from features ships
            </div>
        )
    }
}
