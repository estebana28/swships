import React from "react";
import ShipsFilter from "./ShipsFilter";
import ShipsList from "./ShipsList";
import styled from "styled-components";
import { withShipConsumer } from "../context";
import Loading from "./Loading";

const ContainerWrapper = styled.section``;

function ShipsContainer({ context }) {
    const { loading, sortedShips, ships } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <ContainerWrapper>
            <ShipsFilter ships={ships} />
            <ShipsList ships={sortedShips} />
        </ContainerWrapper>
    );
}

export default withShipConsumer(ShipsContainer);
