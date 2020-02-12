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
        margin: 2rem 0;
        font-size: 4rem;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 769px) {
        .featured-ship-wrapper {
            flex-direction: column;
        }
    }
    @media (min-width: 1440px) {
        margin: 0 5rem;
        .featured-ship-wrapper {
            display: flex;
            flex-direction: column;
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
                <div className="featured-ship-wrapper">
                    {loading ? <Loading /> : ships}
                </div>
            </FeaturedWrapper>
        );
    }
}
