import React, { Component } from 'react';
import datas from './data';

const ShipContext = React.createContext();

//

 class ShipProvider extends Component {
    state={
        ships:[],
        sortedShips:[],
        featuredShips:[],
        loading:true,
    }

// GetData

componentDidMount(){
    let ships = this.formatData(datas)
}




    render() {
        return <ShipContext.Provider value={{ ...this.state }}>
        {this.props.children}
        </ShipContext.Provider>;
    }
}

const ShipConsumer = ShipContext.Consumer;

export{ShipProvider, ShipConsumer, ShipContext };
