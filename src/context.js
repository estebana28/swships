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
        type: 'all',
        'cargo_capacity': 1,
        'cost_in_credits': 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        max_atmosphering_speed: 0,
        weapons: false,
    };

// GetData

componentDidMount() {
    let ships = this.formatData(items);
    let featuredShips = ships.filter(ship => ship.featured === true);
    let maxPrice = Math.max(...ships.map(item => item.cost_in_credits));
    let maxSize = Math.max(...ships.map(item => item.length));

    this.setState({
        ships,
        featuredShips, 
        sortedShips:ships, 
        loading:false,
        cost_in_credits: maxPrice,
        maxPrice,
        maxSize,
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

handleChange = event => {
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked:target.value;
    const name = event.target.name;
    this.setState({
        [name]:value
    },this.filterShips)
}

filterShips =  ()=> {
    let{
        ships,type,cargo_capacity,cost_in_credits,max_atmosphering_speed,minSize,maxSize,maxPrice,length,weapons
    } = this.state

    let tempShips =[...ships];
    if(type !== 'all'){
        tempShips = tempShips.filter(ship => ship.type === type)
    }
    this.setState({
        sortedShips:tempShips
    })
}



    render() {
        return (
            <ShipContext.Provider value={
                { 
                ...this.state, 
                getShip: this.getShip,
                handleChange:this.handleChange 
                }}>
                {this.props.children}
            </ShipContext.Provider>
        )
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
