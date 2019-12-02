import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background: cadetblue;
    margin: 40px auto;
    padding: 15px;
    width: 50%;
    border-radius: 10px;
`;

export default function StarWarsCard(x) {
    return(
        <Card>
            <h1>{x.name}</h1>
            <h2>{x.gender}</h2>
            <h3>{x.birthYear}</h3>
        </Card>
    )
}