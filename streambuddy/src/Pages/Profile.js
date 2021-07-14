import React from 'react';
import CommentInput from '../components/CommentInput';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardList from '../components/MoviecardList';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import ReviewedMovies from '../components/ReviewedMovies';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";
import Authentication from "../components/Authentications";
import profilePicture from "../assets/profilePic.png"
import editButton from "../assets/editButton.png"
import { maxWidth } from '@material-ui/system';
import { watchlist } from "../watchlist"
import { likedMovies } from "../likedMovies"


function Profile() {

    // TODO: retrieve data through axios instead of hardcode it
    let profileName = "popcornFan";

    // we use denseView to determine whether render the expanded version with the movie posters or a dense list-like version
    // TODO: put both variables in one state
    const [denseViewForWatchlist, setDenseViewForWatchlist] = React.useState(true);
    const [denseViewForLikedMovies, setDenseViewForMovies] = React.useState(true);

    return(
        <Container maxWidth="lg">
            <div>
                <User/>
                <ProfileNavbar />
                <MoviecardListWrapper name="Watchlist" movieList={watchlist} denseView={denseViewForWatchlist}/>
                <MoviecardList name="Liked Movies" movieList={likedMovies} />
                <ReviewedMovies />
                <Friends />
            </div>
        </Container>
    );
}

export default Profile;