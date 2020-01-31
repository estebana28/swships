import React, { Component } from "react";
import defaultBcg from "../images/bcg.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ShipContext } from "../context";
import styled from "styled-components";

const SingleShipWrapper = styled.section`
    .single-ship-images {
        display: flex;
        width: 90vw;
        margin: 1rem 2rem;
        height: 50vh;
    }

    .panel {
        background-size: auto 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        height: 50vh;
        position: relative;
        margin: 0.3rem;
        width: 7vw;
        transition: flex 0.7s cubic-bezier(0.05, 0.6, 0.4, 0.9);
    }
    .panel.active {
        flex: 4;
    }
    .panel:nth-of-type(4) {
        display: none;
    }

    .panel:nth-of-type(5) {
        display: none;
    }
    .single-ship-data {
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: auto;
        h2 {
            text-align: center;
            font-size: 2rem;
        }
    }
    .ship-description {
        order: 1;
        width: 100%;
    }
    .ship-info {
        order: 2;
    }

    @media (min-width: 769px) {
        .single-ship-images {
            width: 90vw;
            height: 60vh;
        }
        .panel {
            height: 60vh;
        }
        .panel:nth-of-type(4) {
            display: flex;
        }

        .panel:nth-of-type(5) {
            display: flex;
        }
    }
    @media (min-width: 1441px) {
        .single-ship-images {
            height: 80vh;
            width: 95vw;
        }
        .panel {
            height: 80vh;
        }
        .single-ship-data {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            h2 {
                margin: 2rem 0;
            }
        }
        .ship-description {
            width: 55%;
            order: 1;
            align-self: flex-start;
            font-size: 2rem;
        }
        .ship-info {
            width: 40%;
            order: 2;
            font-size: 1.5rem;
        }
    }
`;

export default class SingleShip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg,
            selectedImg: 0
        };
    }

    selected(e, index) {
        e.preventDefault();
        this.setState({
            selectedImg: index
        });
    }

    static contextType = ShipContext;

    render() {
        const { getShip } = this.context;
        const ship = getShip(this.state.slug);

        if (!ship) {
            return (
                <div className="error">
                    <h3>no such ship could be found</h3>
                    <Link to="/ships" className="btn-primary">
                        back to ships
                    </Link>
                </div>
            );
        }

        const {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            images,
            description
        } = ship;
        return (
            <>
                <Hero img={images[0]}>
                    <Banner title={`${name}`}>
                        <Link to="/ships" className="btn-primary">
                            back to search
                        </Link>
                    </Banner>
                </Hero>

                <SingleShipWrapper className="single-ship">
                    <div className="single-ship-images">
                        {images.map((item, index) => {
                            return (
                                <img
                                    key={index}
                                    src={item}
                                    alt={name}
                                    className={
                                        index === this.state.selectedImg
                                            ? "panel active"
                                            : "panel"
                                    }
                                    onClick={e => this.selected(e, index)}
                                />
                            );
                        })}
                    </div>
                    <div className="single-ship-data">
                        <article className="ship-description">
                            <h2>details</h2>
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </article>
                        <article className="ship-info">
                            <h2>info</h2>
                            <h5>model : {model}</h5>
                            <h5>price : ${cost_in_credits}</h5>
                            <h5>manufacturer : {manufacturer}</h5>
                            <h5>lenght : {length} mts.</h5>
                            <h5>speed : {max_atmosphering_speed} km/h</h5>
                            <h5>crew : {crew}</h5>
                            <h5>
                                passengers :{" "}
                                {passengers > 0 ? `${passengers}` : `None`}
                            </h5>
                            <h5>cargo capacity : {cargo_capacity} units</h5>
                        </article>
                    </div>
                </SingleShipWrapper>
            </>
        );
    }
}
