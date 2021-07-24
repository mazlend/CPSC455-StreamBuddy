import React from 'react';
import ProfileNavbar from '../components/ProfileNavbar';
import MoviecardListWrapper from '../components/MoviecardListWrapper';
import Reviews from '../components/Reviews';
import Friends from '../components/Friends';
import User from '../components/User';
import {Container} from "@material-ui/core";

function Profile(props) {

    // TODO: we use denseView to determine whether render the expanded version with the movie posters or a dense list-like version
    // we want to have the option for a dense view as users may not want to see every category with posters
    // not yet fully implemented
    const [views, setViews] = React.useState(
        {
            denseViewWatchList: false,
            denseViewWatchedMovies: false
        }
    )
    
    return(
        <Container maxWidth="lg">
            <div>
                {user && <User name={props.user.name}/>}
                <ProfileNavbar />
                {user && <MoviecardListWrapper id="watchlist" name="Watchlist" movieList={props.user.watchlist} denseView={views.denseViewWatchList}/> }
                {user && <MoviecardListWrapper id="watchedMovies" name="Watched Movies" movieList={props.user.watched} denseView={views.denseViewWatchedMovies} /> }
                <Reviews id="reviews" />
                <Friends id="friends" />
            </div>
        </Container>
    );
}

export default Profile;