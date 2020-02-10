import React from "react";
import styled from "styled-components";
import Ship from "./Ship";

const ListWrapper = styled.section`
    width: 80vw;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    @media (min-width: 769px) {
        ul {
            width: 100%;
            padding: 0;
            flex-direction: row;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }
`;

const ShipsList = ({ ships }) => {
    if (ships.length === 0) {
        return (
            <div className="empty-search">
                <h3>
                    mmmm... maybe, just maybe, no ship match your search
                    parameters
                </h3>
            </div>
        );
    }
    return (
        <ListWrapper>
            <ul className="article-list">
                {ships.map(item => {
                    return <Ship key={item.id} ship={item} />;
                })}
            </ul>
        </ListWrapper>
    );
};

export default ShipsList;
