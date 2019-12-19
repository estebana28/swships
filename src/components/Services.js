import React, { Component } from 'react';
import Title from './Title';
import {Empire,Fighter,Map,Rebel} from '../images/icons';


export default class Services extends Component {
    state={
        services:[
            {
                icon:<Empire/>,
                title: "Empire",
                info: "We got Empire spaceships for you!"
            },
            {
                icon:<Fighter/>,
                title: "Mercenaries Ships",
                info: "We got mercenaries spaceships for you!"
            },
            {
                icon:<Map/>,
                title: "Delivery GalaxyWide",
                info: "We deliver you purchased ship anyware in the whole universe"
            },
            {
                icon:<Rebel/>,
                title: "Rebel Ships",
                info: "We got Rebel spaceships for you!"
            },
        ]
    }
    render() {
        return (
            <div>
                <Title title='services' />
            </div>
        )
    }
}
