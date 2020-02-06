import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedShips from "../components/FeaturedShips";
import styled from "styled-components";

const HomeWrapper = styled.main`
    width: 100vw;
`;

export const Home = () => {
    return (
        <HomeWrapper>
            <Hero>
                <Banner
                    title="KICKASS SHIPS"
                    subtitle="The best ships of the galaxy!!"
                >
                    <Link to="/ships" className="btn-primary banner-link">
                        find your ship
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedShips />
        </HomeWrapper>
    );
};

export default Home;
