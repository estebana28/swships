import React, { Component } from "react";
import { ShipContext } from "../context";
import styled from "styled-components";
import Loading from "./Loading";
import Ship from "./Ship";
import Title from "./Title";

const FeaturedWrapper = styled.section`
    width: 80vw;
    text-align: center;
    margin: auto;
    background-color: #fff;
    h4 {
        margin: 2rem;
        font-size: 4rem;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1441px) {
        div {
            flex-direction: row;
        }
    }
`;

export default class FeaturedShips extends Component {
    static contextType = ShipContext;
    render() {
        let { loading, featuredShips: ships } = this.context;

        ships = ships.map(ship => {
            return <Ship key={ship.id} ship={ship} />;
        });

        return (
            <FeaturedWrapper>
                <Title title="FEATURED SHIPS" />
                <div>{loading ? <Loading /> : ships}</div>
            </FeaturedWrapper>
        );
    }
}
