import React from 'react';
import {Container} from "@material-ui/core";

function LikedMovies() {


    return(
        <Container maxWidth="lg">
            <div>
               <h1>
                   Liked Movies
               </h1>
               <p>
                   Liked Movies contains all movies the user likes. This could be either movies he/she has already seen or movies they would like to see. Just movies they like. <br />
                   The user can sort (year, alphabet, imdb rating) and filter (genre, recommended to friends) the movies.
               </p>
            </div>
        </Container>
    );
}

export default LikedMovies;