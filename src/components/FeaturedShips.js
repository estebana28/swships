import React, { Component } from 'react';
import { ShipContext } from '../context';
import styled from 'styled-components'
import Loading from './Loading';
import Ship from './Ship';
import Title from './Title';



const FeaturedWrapper = styled.section`
    width: 80vw;
    text-align: center;
    margin: auto;

    h4 {
        margin: 3rem;
        font-size: 3rem;
    }
    div {
        display: flex;
        flex-direction: column;
    }
`

export default class FeaturedShips extends Component {
    static contextType = ShipContext;
    render() {
        let { loading, featuredShips: ships} = this.context;

        ships = ships.map(ship => {
            return <Ship key={ship.id} ship={ship} />;
        });


        return (
            <FeaturedWrapper>
                <Title title="featured ships" />
                <div>
                    {loading?<Loading/>:ships}
                </div>
            </FeaturedWrapper>
        );
    }
}
