import React, {useContext} from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import User from '../components/User';
import {Container} from "@material-ui/core";
import {UserContext} from "../components/UserContext";


function Profile() {

    const {user} = useContext(UserContext);

    return(
        <Container maxWidth="lg">
            <div>
                {user.name && <User name={user.name}/>}
                <ProfileNavbar watchedMovies={user.watched} watchList={user.watchlist}/>
            </div>
        </Container>
    );
}

export default Profile;