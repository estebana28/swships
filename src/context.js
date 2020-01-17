import React, { Component } from 'react';
import items from './data';

const ShipContext = React.createContext();

//

export default class ShipProvider extends Component {
    state = {
        ships: [],
        sortedShips: [],
        featuredShips: [],
        loading: true,
    };

// GetData

componentDidMount() {
    let ships = this.formatData(items);
    let featuredShips = ships.filter(ship => ship.featured === true);
    this.setState({
        ships,
        featuredShips, 
        sortedShips:ships, 
        loading:false
    });
}

formatData(items) {
    let tempItems = items.map(item => {
        let id = item.core.id;
        let images = item.images.map(image => image.image.url);

        let ship = {...item.descrip, images, id}
        return ship;
    });
    return tempItems;
}


getShip = (slug) => {
    let tempShips = [...this.state.ships];
    const ship = tempShips.find((ship) => ship.slug === slug);
    return ship;
};


    render() {
        return <ShipContext.Provider value={{ ...this.state, getShip: this.getShip }}>
        {this.props.children}
        </ShipContext.Provider>;
    }
}

const ShipConsumer = ShipContext.Consumer;

export function withShipConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <ShipConsumer>
                {value => <Component {...props} context={value}/>}
            </ShipConsumer>
        )
    }
}

export{ShipProvider, ShipConsumer, ShipContext };
