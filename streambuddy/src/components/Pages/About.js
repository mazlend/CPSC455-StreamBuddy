import React from 'react';
import {Container} from "@material-ui/core";
import netflixMovieList from '../../netflixMovieList.json';
import AdvancedSearchQuery from "../AdvancedSearchQuery";


function About() {
    const data = netflixMovieList;

    return(
        <Container maxWidth="lg">
            <div>
                <h1> About StreamBuddy </h1>
            </div>

            <AdvancedSearchQuery />
            {/*<ul>*/}
            {/*    {data.map((item) => (<li>{item.Title} Release Year: {item["Year of release"]}</li>))}*/}
            {/*</ul>*/}
        </Container>
    );
}

export default About;