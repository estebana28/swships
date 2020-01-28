import React from "react";
import styled from "styled-components";
import Ship from "./Ship";

const ListWrapper = styled.section`
    width: 80vw;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const ShipsList = ({ ships }) => {
    if (ships.lenght === 0) {
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
            <article>
                {ships.map(item => {
                    return <Ship key={item.id} ship={item} />;
                })}
            </article>
        </ListWrapper>
    );
};

export default ShipsList;
