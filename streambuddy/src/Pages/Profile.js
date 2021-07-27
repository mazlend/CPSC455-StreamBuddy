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

    // we use denseView to determine whether render the expanded version with the movie posters or a dense list-like version
    // we want to have the option for a dense view as users may not want to see every category with posters
    const [views, setViews] = React.useState(
        {
            denseViewWatchList: false,
            denseViewWatchedMovies: false
        }
    )

    const auth = useContext(UserContext);

    let tempUserName = auth.user.name;
    let tempWatchList = auth.user.watchlist;
    let tempWatchedMovies = auth.user.watched;

    console.log(tempUserName);
    console.log(tempWatchList);
    console.log(tempWatchedMovies);




    // TODO: use a working google id, as a next step we need to somehow pass the google id from authetication to here
    const googleId = "968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"


    // const getUser = (user) => {
    //     axios.get(`http://localhost:5000/api/users/${user._id}`)
    //         .then((res) => {
    //             if (res.data) {
    //                 console.log(res.data);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    
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