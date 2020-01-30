import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header``;

export default function Hero({ children, hero }) {
    return <HeaderWrapper className={hero}>{children}</HeaderWrapper>;
}

Hero.defaultProps = {
    hero: "defaultHero"
};
