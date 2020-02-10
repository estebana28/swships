import React, { Component } from "react";
import Title from "./Title";
import styled from "styled-components";
import Empire from "../images/icons/Empire.png";
import Fighter from "../images/icons/Fighter.png";
import Mapis from "../images/icons/Map.png";
import Rebel from "../images/icons/Rebel.png";

const ServicesWrapper = styled.section`
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: "work sans";
    margin: 0 auto;
    flex-direction: column;
    h4 {
        margin: 3rem;
        font-weight: bold;
    }
    div {
        width: 90vw;
        margin: 0 auto;
    }
    img {
        height: 20vh;
    }
    article {
        width: 40vw;
        margin: 2rem auto;
    }
    h6 {
        font-size: 2rem;
        margin: 10px auto;
    }
    p {
        font-size: 1.5rem;
    }
    @media (min-width: 769px) {
        .services-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        article {
            width: 40vw;
            margin: 0;
        }
        img {
            height: 15vh;
        }
    }

    @media (min-width: 1440px) {
        article {
            width: 20vw;
        }
    }
`;

export default class Services extends Component {
    state = {
        services: [
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
                info:
                    "We deliver your purchased ship anywhere in the whole universe"
            },
            {
                img: Rebel,
                title: "Rebel Ships",
                info: "We got Rebel spaceships for you!"
            }
        ]
    };
    render() {
        return (
            <ServicesWrapper>
                <Title className="title" title="SERVICES" />
                <div className="services-wrapper">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index}>
                                <img src={item.img} alt="" />
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </ServicesWrapper>
        );
    }
}
