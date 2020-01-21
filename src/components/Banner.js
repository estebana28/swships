import React from 'react';
import styled from 'styled-components'
import tatoo from '../images/tatooine.jpg'


const BannerWrapper = styled.div`
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 50vh;
        background-image: url(${tatoo});
        background-size: cover;
        background-position: center;
        text-align: center;
        padding-top: 4rem;
        font-size: 3rem;
        color: #fff;
        p {
            font-size: 2rem;
        }
    }
`

const Banner = ({children,title,subtitle}) => {
    return (
        <BannerWrapper>
            <h1>{title}</h1>
                <p>{subtitle}</p>
                <div>{children}</div>   
        </BannerWrapper>
    )
}

export default Banner
