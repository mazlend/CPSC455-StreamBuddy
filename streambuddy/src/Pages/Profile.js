import React from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import User from '../components/User';
import {Container} from "@material-ui/core";


function Profile() {

    return(
        <Container maxWidth="lg">
            <div>
                <User/>
                <ProfileNavbar/>
            </div>
        </Container>
    );
}

export default Profile;