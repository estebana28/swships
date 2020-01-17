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





// import React from 'react';
// import ShipsFilter from './ShipsFilter';
// import ShipsList from './ShipsList';
// import {ShipConsumer} from '../context';
// import Loading from './Loading';


// export default function ShipsContainer() {
//     return (
//         <ShipConsumer>
//             {
//                 value => {
//                     const {loading, sortedShips, ships} = value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             Hello from ship container
//                             <ShipsFilter ships={ships}/>
//                             <ShipsList ships={sortedShips} />
//                         </div>
//                     );
//                 }
//             }
        
//         </ShipConsumer>
        
//     )
// }
