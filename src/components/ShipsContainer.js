import React from 'react';
import ShipsFilter from './ShipsFilter';
import ShipsList from './ShipsList';
import {withShipConsumer} from '../context';
import Loading from './Loading';

function ShipsContainer({context}) {
    const {loading, sortedShips, ships} = context;
    if(loading){
            return <Loading/>
        }
        return (
            <>
                <ShipsFilter ships={ships}/>
                <ShipsList ships={sortedShips} />
            </>
        );
    }


export default withShipConsumer(ShipsContainer)
