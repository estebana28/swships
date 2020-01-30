import React, { Component } from 'react';
import defaultBcg from '../images/bcg.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ShipContext} from '../context';
import styled from 'styled-components';



const SingleShipWrapper = styled.section`
    .single-ship-images {
	display: flex;
	width: 90vw;
    }
    .panel {
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50px;
	color: #fff;
	flex: 0.5;
	cursor: pointer;
	height: 80vh;
	position: relative;
	margin: 10px;
	transition: flex 0.7s cubic-bezier(0.05, 0.6, 0.4, 0.9);
    }
    .panel.active {
	flex: 5;
    }
    @media screen and (max-width: 480px) {
	.container {
		width: 100vw;
	}
	
	.panel:nth-of-type(4) {
		display: none;
	}
	
	.panel:nth-of-type(5) {
		display: none;
	}
    }
`;



export default class SingleShip extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }

    static contextType = ShipContext;


    render() {

        const { getShip } = this.context;
        const ship = getShip(this.state.slug);

        if (!ship) {
            return (
                <div className="error">
                    <h3>no such ship could be found</h3>
                    <Link to='/ships' className="btn-primary">
                    back to ships
                    </Link>
                </div>
            );
        }

        const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, images, description} = ship;
        return (
            <>
            <Hero img={images[0]}>
                <Banner title={`${name} ship`}>
                    <Link to='/ships' className="btn-primary">back to ships</Link>
                </Banner>
            </Hero>

            <SingleShipWrapper className="single-ship">
                <div className="single-ship-images">
                    {images.map((item,index)=>{
                        return <img key={index} src={item} alt={name} className="panel"/>
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
            </SingleShipWrapper>
            </>
        )
    }
}


const panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        console.log("kakaka");
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
