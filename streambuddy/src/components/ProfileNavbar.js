import React from 'react';
import {Container} from "@material-ui/core";

// TODO: make each item a clickable button or similar to jump to section of profile

function ProfileNavbar() {
    return(
        <Container maxWidth="lg">
            <div class="profileNavbarDiv">
                <p> Watchlist </p>
                <p> Liked Movies </p>
                <p> Reviewed Movies </p>
                <p> Friends </p>
            </div>
        </Container>
    );
}

export default ProfileNavbar;


