import React, { Component } from 'react';
import Title from './Title';
import Empire from '../images/icons/Empire.png';
import Fighter from '../images/icons/Fighter.png';
import Mapis from '../images/icons/Map.png';
import Rebel from '../images/icons/Rebel.png';



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
                info: "We deliver you purchased ship anyware in the whole universe"
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
            <section className="sect-services">
                <Title title='services' />
                <div className="sect-services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                                <img src={item.img} />
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                })}
                </div>  
            </section >
        )
    }
}
