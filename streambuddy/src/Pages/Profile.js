import React from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import Reviews from '../components/Reviews';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";
import axios from "axios";
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

    const [user, setUser] = React.useState(null);

    // TODO: use a working google id, as a next step we need to somehow pass the google id from authetication to here
    const googleId = "968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"

    const tempUserName = "popcornFan"
    const tempWatchList = watchlist;
    const tempWatchedMovies = watchedMovies;

    const getUser = () => {
        axios.get(`http://localhost:5000/api/users/${googleId}`)
            .then((res) => {
                if (res.data) {
                    setUser(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    React.useEffect(() => {
        getUser();
    }, []);
    
    return(
        <Container maxWidth="lg">
            <div>
                {user || tempUserName && <User name={tempUserName}/>}
                <ProfileNavbar />
            </div>
        </Container>
    );
}

export default Profile;