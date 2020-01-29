import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
    margin-bottom: 25px;
    h4 {
        font-size: 5rem;
    }
`;

export default function Title({ title }) {
    return (
        <TitleWrapper>
            <h4>{title}</h4>
        </TitleWrapper>
    );
}
