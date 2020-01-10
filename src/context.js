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
    let ships = this.formatData(datas);
    let featuredShips = ships.filter(ship => ship.feature === true);
    this.setState({
        ships,
        featuredShips, 
        sortedShips:ships, 
        loading:false
    });
}

formatData(datas){
    let tempDatas = datas.map(data => {
        let id = data.id;
        let images = data.descrip.images.map(image => image.descrip.image);

        let ship = {...datas.descrip, images, id}
        return ship;
    });
    return tempDatas;
}


    render() {
        return <ShipContext.Provider value={{ ...this.state }}>
        {this.props.children}
        </ShipContext.Provider>;
    }
}

const ShipConsumer = ShipContext.Consumer;

export{ShipProvider, ShipConsumer, ShipContext };
