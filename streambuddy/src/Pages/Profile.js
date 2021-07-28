import React, {useContext} from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import Reviews from '../components/Reviews';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";
import axios from "axios";
import {watchlist} from "../watchlist";
import {watchedMovies} from "../watchedMovies";
import {UserContext} from "../components/UserContext";


function Profile() {

    let auth = useContext(UserContext);

    let tempUserName = auth.user.name;
    let tempWatchList = auth.user.watchlist;
    let tempWatchedMovies = auth.user.watched;

    console.log(tempUserName);
    console.log(tempWatchList);
    console.log(tempWatchedMovies);

    // TODO: use a working google id, as a next step we need to somehow pass the google id from authetication to here
    const googleId = "968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"

    return(
        <Container maxWidth="lg">
            <div>
                {tempUserName && <User name={tempUserName}/>}
                <ProfileNavbar watchedMovies={tempWatchedMovies} watchList={tempWatchList}/>
            </div>
        </Container>
    );
}

export default Profile;