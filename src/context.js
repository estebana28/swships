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

formatData(datas){
    let tempDatas = datas.map(data => {
        let id = data.sys.id
        let datas.fields.images.map(image => image.fields.file.url);
    })
}


    render() {
        return <ShipContext.Provider value={{ ...this.state }}>
        {this.props.children}
        </ShipContext.Provider>;
    }
}

const ShipConsumer = ShipContext.Consumer;

export{ShipProvider, ShipConsumer, ShipContext };
