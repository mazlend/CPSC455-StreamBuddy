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
                {props.user ?
                <div>
                    <User name={props.user.name}/>
                    <ProfileNavbar />
                    <MoviecardListWrapper id="watchlist" name="Watchlist" list={props.user.watchlist} denseView={views.denseViewWatchList}/>
                    <MoviecardListWrapper id="watchedMovies" name="Watched Movies" list={props.user.watched} denseView={views.denseViewWatchedMovies} />
                    <Reviews id="reviews" name="Reviews" reviews={props.user.reviews} />
                    <Friends id="friends" name="Friends" followers={props.user.followers} following={props.user.following} />
                </div>
                : <div>
                    <h1>
                        Welcome to the profile page
                    </h1>
                    <p>
                        Please register or login to see a profile!
                    </p>
                </div>}
        </Container>
    );
}

export default Profile;