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
        h2 {
            font-size: 3rem;
            font-family: "work sans";
        }
        h4 {
            font-size: 2rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
        }
        p {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
        }
    }
    .ship-info {
        order: 2;
        h2 {
            font-size: 2rem;
            font-family: "work sans";
        }
        h5 {
            font-size: 1.5rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            font-weight: 300;
        }
        h5 span {
            font-weight: 500;
        }
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
        .ship-description {
            p {
                font-size: 1.5rem;
            }
        }
        .ship-info {
            h2 {
                font-size: 3rem;
            }
            h5 {
                font-size: 2rem;
            }
        }
    }
    @media (min-width: 1440px) {
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
            h2 {
                font-size: 4rem;
            }
            h4 {
                font-size: 2.5rem;
            }
            p {
                font-size: 2rem;
            }
        }
        .ship-info {
            width: 40%;
            order: 2;
            h2 {
                font-size: 4rem;
            }
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
                            <h2>description</h2>
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </article>
                        <article className="ship-info">
                            <h2>info</h2>
                            <h5>
                                <span>model :</span> {model}
                            </h5>
                            <h5>
                                <span>price :</span> ${cost_in_credits}
                            </h5>
                            <h5>
                                <span>manufacturer :</span> {manufacturer}
                            </h5>
                            <h5>
                                <span>lenght :</span> {length} mts.
                            </h5>
                            <h5>
                                <span>speed :</span> {max_atmosphering_speed}{" "}
                                km/h
                            </h5>
                            <h5>
                                <span>crew :</span> {crew}
                            </h5>
                            <h5>
                                <span>passengers :</span>{" "}
                                {passengers > 0 ? `${passengers}` : `None`}
                            </h5>
                            <h5>
                                <span>cargo capacity :</span> {cargo_capacity}{" "}
                                units
                            </h5>
                        </article>
                    </div>
                </SingleShipWrapper>
            </>
        );
    }
}
