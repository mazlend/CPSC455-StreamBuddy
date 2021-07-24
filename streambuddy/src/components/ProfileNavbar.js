import React from 'react';
import {Container} from "@material-ui/core";

// TODO: make each item a clickable button or similar to jump to section of profile?

function ProfileNavbar() {
    return(
        <Container maxWidth="lg">
            <div class="profileNavbarDiv">
                <a href="#watchlist"> Watchlist </a>
                <a href="#watchedMovies"> Watched Movies </a>
                <a href="#reviews"> Reviews </a>
                <a href="#friends"> Friends </a>
            </div>
        </Container>
    );
}

export default ProfileNavbar;


