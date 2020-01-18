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
        handleChange,type,cargo_capacity,cost_in_credits,minPrice,maxPrice,minSize,maxSize,speed,weapons
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
            </form>
        </section>
    )
}


export default ShipsFilter;