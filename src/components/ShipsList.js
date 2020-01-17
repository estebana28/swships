import React from 'react'
import Ship from './Ship'


const ShipsList = ({ ships }) => {
    if(ships.lenght === 0 ) {
        return (
            <div className="empty-search">
                <h3>mmmm... maybe, just maybe, no ship match your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="shipslist">
            <div className="shipslist-center">
            {
                ships.map(item => {
                    return <Ship key={item.id} ship={item} />;
                })
            }
            </div>
        </section>
    )
}

export default ShipsList;
