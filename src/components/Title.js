import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
    margin-bottom: 25px;
    text-align: center;
    h4 {
        font-size: 5rem;
        font-family: "work sans";
        font-weight: bold;
    }
`;

export default function Title({ title }) {
    return (
        <TitleWrapper>
            <h4>{title}</h4>
        </TitleWrapper>
    );
}
