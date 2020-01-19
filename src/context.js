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
        minCargo: 0,
        maxCargo: 0,
        'cost_in_credits': 0,
        minCost: 0,
        maxCost: 0,
        minSize: 0,
        maxSize: 0,
        max_atmosphering_speed: 0,
        minSpeed: 0,
        maxSpeed: 0,
        weapons: false,
        length: 0,
        passengers: 0,
    };

// GetData

componentDidMount() {
    let ships = this.formatData(items);
    let featuredShips = ships.filter(ship => ship.featured === true);
    let maxSize = Math.max(...ships.map(item => item.length));
    let maxSpeed = Math.max(...ships.map(item => item.max_atmosphering_speed));
    let maxCargo = Math.max(...ships.map(item => item.cargo_capacity));
    let maxCost = Math.max(...ships.map(item => item.cost_in_credits))
    
    



    this.setState({
        ships,
        featuredShips, 
        sortedShips:ships, 
        loading:false,
        cost_in_credits: maxCost,
        maxCost,
        length: maxSize,
        maxSize,
        max_atmosphering_speed: maxSpeed,
        maxSpeed,
        cargo_capacity: maxCargo,
        maxCargo,
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
    const value = target.type === 'checkbox' ? target.checked:target.value;
    const name = event.target.name;
    this.setState({
        [name]:value
    },this.filterShips)
}

filterShips =  ()=> {
    let{
        ships,type,cargo_capacity,cost_in_credits,max_atmosphering_speed,minSpeed,maxSpeed,minSize,maxSize,minCost,maxCost,length,weapons,passengers
    } = this.state

    let tempShips =[...ships];

    // Transform values type
    length = parseInt(length);
    max_atmosphering_speed = parseInt(max_atmosphering_speed);
    cargo_capacity = parseInt(cargo_capacity);

    // Filter type
    if(type !== 'all'){
        tempShips = tempShips.filter(ship => ship.type === type)
    }

    // Filter Length
    tempShips = tempShips.filter(ship => ship.length <= length)

    // Filter Speed
    tempShips = tempShips.filter(ship => ship.max_atmosphering_speed <= max_atmosphering_speed)
    
    // Filter CargoCapacity
    tempShips = tempShips.filter(ship => ship.cargo_capacity <= cargo_capacity)

    // Filter Cost_in_Credits
    tempShips = tempShips.filter(ship => ship.cost_in_credits >= minCost && ship.cost_in_credits <= maxCost)

    // Filter Checkboxes
    // Weapons
    if(weapons){
        tempShips = tempShips.filter(ship => ship.weapons === true)
    }
    // Passengers
    if(passengers){
        tempShips = tempShips.filter(ship => ship.passengers > 0)
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
