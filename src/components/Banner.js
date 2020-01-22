import React from 'react';
import styled from 'styled-components'
import tatoo from '../images/tatooine.jpg'
import { device } from '../components/device'


const BannerWrapper = styled.div`
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
        @media ${device.laptop} {
            
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
