import React from 'react'
import {useContext} from 'react'
import {ShipContext} from '../context'
import Title from '../components/Title'

// Filter unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

const ShipsFilter = ({ ships }) => {
    const context = useContext(ShipContext);
    const {
        handleChange,type,cargo_capacity,minCargo,maxCargo,length,minCost,cost_in_credits,maxCost,minSize,maxSize,max_atmosphering_speed,minSpeed,maxSpeed,weapons,passengers
    } = context;

let types = getUnique(ships,'type');

types = ['all', ...types];

types = types.map((item, index) => {
    return (
        <option value={item} key={index}>
            {item}
        </option>
    );
});
    return (
        <section className="filter-container">
            <Title title="search ships"/>
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">ship type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* Length */}
                <div className="form-group">
                    <label htmlFor="length">ship length {length}</label>
                    <input type="range" name="length" min={minSize} max={maxSize} id="length" value={length} onChange={handleChange} className="form-control" />
                </div>
                {/* Speed */}
                <div className="form-group">
                    <label htmlFor="max_atmosphering_speed">ship speed {max_atmosphering_speed}</label>
                    <input type="range" name="max_atmosphering_speed" min={minSpeed} max={maxSpeed} id="max_atmosphering_speed" value={max_atmosphering_speed} onChange={handleChange} className="form-control" />
                </div>
                {/* Cargo_Capacity */}
                <div className="form-group">
                    <label htmlFor="cargo_capacity">ship cargo capacity {cargo_capacity}</label>
                    <input type="range" name="cargo_capacity" min={minCargo} max={maxCargo} id="cargo_capacity" value={cargo_capacity} onChange={handleChange} className="form-control" />
                </div>
                {/* Cost_in_credits */}
                <div className="form-group">
                    <label htmlFor="cost_in_credits">ship cost {cost_in_credits}</label>
                    <div className="cost-inputs">
                        <input type="number" name="minCost" id="minCost" value={minCost} onChange={handleChange} className="cost-input" />
                        <input type="number" name="maxCost" id="maxCost" value={maxCost} onChange={handleChange} className="cost-input" />
                    </div>
                </div>
                {/* Cost_in_credits */}
                <div className="form-group">
                    <div className="single-check">
                        <input type="checkbox" name="weapons" id="weapons" checked={weapons} onChange={handleChange} />
                        <label htmlFor="weapons">weapons</label>
                    </div>
                    <div className="single-check">
                    <input type="checkbox" name="passengers" id="passengers" checked={passengers} onChange={handleChange} />
                    <label htmlFor="passengers">passengers</label>
                </div>
                </div>

            </form>
        </section>
    )
}


export default ShipsFilter;