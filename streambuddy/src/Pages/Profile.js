import React from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import Reviews from '../components/Reviews';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";
import {watchlist} from "../watchlist";
import {watchedMovies} from "../watchedMovies";



function Profile() {

    // we use denseView to determine whether render the expanded version with the movie posters or a dense list-like version
    // we want to have the option for a dense view as users may not want to see every category with posters
    const [views, setViews] = React.useState(
        {
            denseViewWatchList: false,
            denseViewWatchedMovies: false
        }
    )


    // TODO: use a working google id, as a next step we need to somehow pass the google id from authetication to here

    const tempUserName = "popcorn";
    const tempWatchList = watchlist;
    const tempWatchedMovies = watchedMovies;

    return(
        <Container maxWidth="lg">
            <div>
                {tempUserName && <User name={tempUserName}/>}
                <ProfileNavbar />
                {tempWatchList && <MoviecardListWrapper id="watchlist" name="Watchlist" movieList={tempWatchList} denseView={views.denseViewWatchList}/> }
                {tempWatchedMovies && <MoviecardListWrapper id="watchedMovies" name="Watched Movies" movieList={tempWatchedMovies} denseView={views.denseViewWatchedMovies} /> }
                <Reviews id="reviews" />
                <Friends id="friends" />
            </div>
        </Container>
    );
}

export default Profile;