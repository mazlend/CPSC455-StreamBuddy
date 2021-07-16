import React from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import Reviews from '../components/Reviews';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";
import axios from "axios";
import { watchlist } from '../watchlist';
import { watchedMovies } from '../watchedMovies';


function Profile() {

    // we use denseView to determine whether render the expanded version with the movie posters or a dense list-like version
    // we want to have the option for a dense view as users may not want to see every category with posters
    const [views, setViews] = React.useState(
        {
            denseViewWatchList: false,
            denseViewWatchedMovies: false
        }
    )
    const [movieDetails, setMovieDetails] = React.useState(
        {
            watchlist: null,
            watchedMovies: null
        }
    )
    const [userDetails, setUserDetails] = React.useState(
        {
            name: null,
        }
    )

    const getUser = (user) => {
        axios.get(`http://localhost:5000/api/users/${user.googleId}`)
            .then((res) => {
                if (res.data) {
                    //setUser(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const setProfileDetails = () => {
        console.log("setting profile details")
        // here should be an axios call to retrieve the movies -- currently they are just dummy values
        setMovieDetails({
            watchlist: watchlist,
            watchedMovies: watchedMovies,
        })

        // TODO: figure out how to pass a user to profile (either through props from authetication or through url?)
        setUserDetails({
            name: 'PopcornNerd' 
        })
    }

    React.useEffect(()=>{
        setProfileDetails();
    }, []);

    return(
        <Container maxWidth="lg">
            <div>
                {userDetails.name && <User name={userDetails.name}/>}
                <ProfileNavbar />
                {movieDetails.watchlist && <MoviecardListWrapper id="watchlist" name="Watchlist" movieList={movieDetails.watchlist} denseView={views.denseViewWatchList}/> }
                {movieDetails.watchedMovies && <MoviecardListWrapper id="watchedMovies" name="Watched Movies" movieList={movieDetails.watchedMovies} denseView={views.denseViewWatchedMovies} /> }
                <Reviews id="reviews" />
                <Friends id="friends" />
            </div>
        </Container>
    );
}

export default Profile;