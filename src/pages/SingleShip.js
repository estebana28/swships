import React, { Component } from 'react';
import defaultBcg from '../images/bcg.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ShipContext} from '../context';

export default class SingleShip extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = ShipContext;



    render() {

        const { getShip } = this.context;
        const ship = getShip(this.state.slug);

        if (!ship) {
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/ships' className="btn-primary">
                    back to rooms
                    </Link>
                </div>
            );
        }

        const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, images, description} = ship;
        return (
            <>
            <Hero img={images[0]}>
                <Banner title={`${name}`}>
                    <Link to='/ships' className="btn-primary">back to rooms</Link>
                </Banner>
            </Hero>

            <section className="single-ship">
                <div className="single-ship-images">
                    {images.map((item,index)=>{
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-ship-data">
                    <article className="ship-description">
                        <h3>details</h3>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </article>
                    <article className="ship-info">
                        <h3>info</h3>
                        <h6>model : {model}</h6>
                        <h6>price : ${cost_in_credits}</h6>
                        <h6>manufacturer : {manufacturer}</h6>
                        <h6>lenght : {length} mts.</h6>
                        <h6>speed : {max_atmosphering_speed} km/h</h6>
                        <h6>crew : {crew}</h6>
                        <h6>passengers : {" "}
                            {
                            passengers > 0 ? `${passengers}`: `None`
                            }
                        
                        </h6>
                        <h6>cargo capacity : {cargo_capacity} units</h6>
                    </article>
                </div>
            </section>
            </>
        )
    }
}

