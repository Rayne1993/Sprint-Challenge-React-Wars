import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./starWarsCard";
import {Container} from "reactstrap";


export default function StarWars() {
    const [ppl, setPpl] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const y = await 
                    axios.get("https://swapi.co/api/people/");
                    console.log(y);
                    setPpl(y.data.results)
                    }catch(err) {
                        console.log(err);
                    }
        }
        fetchData();
    }, []);
    return (
        <Container>
        {ppl.map((ppl, index) => {
            return (
                <StarWarsCard
                    key = {index}
                    name = {ppl.name}
                    gender = {ppl.gender}
                    birthYear = {ppl.birth_year}
                />
            )
        })}
        </Container>
    )
}