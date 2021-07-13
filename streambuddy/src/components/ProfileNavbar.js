import React from 'react';
import {Container} from "@material-ui/core";


function ProfileNavbar() {
    return(
        <Container maxWidth="lg">
            <span>
                <h1>Watchlist</h1>
                <h1>Liked Movies</h1>
                <h1>Reviewed Movies</h1>
                <h1>Friends</h1>
            </span>
        </Container>
    );
}

export default ProfileNavbar;


