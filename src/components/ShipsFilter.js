import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ShipContext } from "../context";
import Title from "../components/Title";

const FilterWrapper = styled.section`
    width: 80vw;
    text-align: center;
    justify-content: center;
    margin: 30px auto;
    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        input {
            width: 20vw;
        }
        .single-check {
            display: inline-flex;
            justify-content: space-between;
            margin-top: 20px;
            input {
                width: 7vw;
            }
            label {
                margin-top: -4px;
            }
        }
    }
    .form-group {
        text-align: center;
    }
    .form-control {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 25px;
        border-radius: 25px;
        background: gray;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
    }
    .form-control:hover {
        opacity: 1;
    }
`;

// Filter unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const ShipsFilter = ({ ships }) => {
    const context = useContext(ShipContext);
    const {
        handleChange,
        type,
        cargo_capacity,
        minCargo,
        maxCargo,
        length,
        minCost,
        cost_in_credits,
        maxCost,
        minSize,
        maxSize,
        max_atmosphering_speed,
        minSpeed,
        maxSpeed,
        weapons,
        passengers
    } = context;

    let types = getUnique(ships, "type");

    types = ["all", ...types];

    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });
    return (
        <FilterWrapper>
            <Title title="search ships" />
            <form className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">ship type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* Length */}
                <div className="form-group">
                    <label htmlFor="length">length {length}</label>
                    <input
                        type="range"
                        name="length"
                        min={minSize}
                        max={maxSize}
                        id="length"
                        value={length}
                        onChange={handleChange}
                        className="form-control"
                        step="1000"
                    />
                </div>
                {/* Speed */}
                <div className="form-group">
                    <label htmlFor="max_atmosphering_speed">
                        speed {max_atmosphering_speed}
                    </label>
                    <input
                        type="range"
                        name="max_atmosphering_speed"
                        min={minSpeed}
                        max={maxSpeed}
                        id="max_atmosphering_speed"
                        value={max_atmosphering_speed}
                        onChange={handleChange}
                        className="form-control"
                        step="1000"
                    />
                </div>
                {/* Cargo_Capacity */}
                <div className="form-group">
                    <label htmlFor="cargo_capacity">
                        cargo {cargo_capacity}
                    </label>
                    <input
                        type="range"
                        name="cargo_capacity"
                        min={minCargo}
                        max={maxCargo}
                        id="cargo_capacity"
                        value={cargo_capacity}
                        onChange={handleChange}
                        className="form-control"
                        step="1000"
                    />
                </div>
                {/* Cost_in_credits */}
                <div className="form-group">
                    <label htmlFor="cost_in_credits">
                        ship cost {cost_in_credits}
                    </label>
                    <div className="cost-inputs">
                        <input
                            type="number"
                            name="minCost"
                            id="minCost"
                            value={minCost}
                            onChange={handleChange}
                            className="cost-input"
                        />
                        <input
                            type="number"
                            name="maxCost"
                            id="maxCost"
                            value={maxCost}
                            onChange={handleChange}
                            className="cost-input"
                        />
                    </div>
                </div>
                {/* Cost_in_credits */}
                <div className="form-group">
                    <div className="single-check">
                        <input
                            type="checkbox"
                            name="weapons"
                            id="weapons"
                            checked={weapons}
                            onChange={handleChange}
                        />
                        <label htmlFor="weapons">weapons</label>
                    </div>
                    <div className="single-check">
                        <input
                            type="checkbox"
                            name="passengers"
                            id="passengers"
                            checked={passengers}
                            onChange={handleChange}
                        />
                        <label htmlFor="passengers">passengers</label>
                    </div>
                </div>
            </form>
        </FilterWrapper>
    );
};

export default ShipsFilter;
