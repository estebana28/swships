import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components'
import Empire from '../images/icons/Empire.png';
import Fighter from '../images/icons/Fighter.png';
import Mapis from '../images/icons/Map.png';
import Rebel from '../images/icons/Rebel.png';

const ServicesWrapper = styled.section`
    text-align: center;

    h4 {
        font-size: 5rem;
        margin: 3rem;
    }
    div {
        display: flex;    
        flex-direction: row;
        flex-wrap: wrap;
        width: 100vw;
        justify-content: space-evenly;
    }
    article {
        width: 40vw;
        margin: 2rem
    }
    
`



export default class Services extends Component {
    state={
        services:[
            {
                img: Empire,
                title: "Empire",
                info: "We got Empire spaceships for you!"
            },
            {
                img: Fighter,
                title: "Mercenaries Ships",
                info: "We got mercenaries spaceships for you!"
            },
            {
                img: Mapis,
                title: "Delivery GalaxyWide",
                info: "We deliver your purchased ship anywere in the whole universe"
            },
            {
                img: Rebel,
                title: "Rebel Ships",
                info: "We got Rebel spaceships for you!"
            },
        ]
    }
    render() {
        return (
            <ServicesWrapper>
                <Title className="title" title='Services' />
                <div>
                {this.state.services.map((item,index) => {
                    return <article key={index}>
                                <img src={item.img} alt='' />
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                })}
                </div>  
            </ServicesWrapper>
        )
    }
}
