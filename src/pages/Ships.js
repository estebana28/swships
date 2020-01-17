import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import ShipsContainer from '../components/ShipsContainer';


export const Ships = () => {
    return (
        <>
            <Hero ships="shipsHero">
                <Banner title="welcome to my shop">
                    <Link to="/">
                        back to hangar
                    </Link>
                </Banner>
            </Hero>
            <ShipsContainer />
        </>
    )
}

export default Ships
