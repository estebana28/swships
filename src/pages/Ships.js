import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


export const Ships = () => {
    return (
        <Hero ships="shipsHero">
        <Banner title="welcome to my shop">
        <Link to="/">
            back to hangar
        </Link>
        </Banner>
        </Hero>
    )
}

export default Ships
