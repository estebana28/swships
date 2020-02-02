import React from "react";
import styled from "styled-components";
import vader from "../images/vader.jpg";

const BannerWrapper = styled.div`
    height: 80vh;
    width: 100vw;
    background-image: url(${vader});
    background-size: cover;
    background-position: center;
    text-align: left;
    padding-top: 4rem;
    font-size: 2rem;
    color: #fff;
    font-family: "special elite";
    h1 {
        margin-top: 9rem;
        margin-bottom: 0.8rem;
        margin-left: 0.3rem;
    }
    p {
        font-size: 1.5rem;
        margin-left: 0.3rem;
    }
    div {
        margin: 3rem 1.5rem;
    }
    div a {
        border: 2px solid #fff;
        padding: 1rem;
        background-color: transparent;
        color: #fff;
        text-decoration: none;
    }
`;

const Banner = ({ children, title, subtitle }) => {
    return (
        <BannerWrapper>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div>{children}</div>
        </BannerWrapper>
    );
};

export default Banner;
