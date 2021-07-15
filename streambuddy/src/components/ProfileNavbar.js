import React from 'react';
import {Container} from "@material-ui/core";

// TODO: make each item a clickable button or similar to jump to section of profile

function ProfileNavbar() {
    return(
        <Container maxWidth="lg">
            <div class="profileNavbarDiv">
                <a href="#watchlist"> Watchlist </a>
                <a href="#likedMovies"> Liked Movies </a>
                <a href="#watchedMovies"> Watched Movies </a>
                <a href="#reviewedMovies"> Reviewed Movies </a>
                <a href="#friends"> Friends </a>
            </div>
        </Container>
    );
}

export default ProfileNavbar;


