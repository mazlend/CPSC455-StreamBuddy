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

    const {user, setUser} = useContext(UserContext);

    let tempUserName = user.name;
    let tempWatchList = user.watchlist;
    let tempWatchedMovies = user.watched;

    console.log("user" + JSON.stringify(user));
    console.log("user123" + JSON.stringify(user.name));
    console.log("user124556" + JSON.stringify(tempUserName));

    console.log(tempUserName);
    console.log(tempWatchList);
    console.log(tempWatchedMovies);
    // console.log(user.name);
    // console.log(user.watchlist);
    // console.log(user.watched);

    // TODO: use a working google id, as a next step we need to somehow pass the google id from authetication to here
    const googleId = "968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"

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