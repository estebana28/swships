import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="KickAss Ships" subtitle="The best ships of the galaxy!!">
                <Link to="/rooms" className="btn-primary">
                    find your ship
                </Link>
                </Banner>
            </Hero>
            <Services />
        </>
    );
}

export default Home