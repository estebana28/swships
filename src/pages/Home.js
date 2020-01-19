import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedShips from '../components/FeaturedShips';


export const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="KickAss Ships" subtitle="The best ships of the galaxy!!">
                <Link to="/ships" className="btn-primary banner-link">
                    find your ship
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedShips />
        </>
    );
}

export default Home