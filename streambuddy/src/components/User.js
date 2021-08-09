import React, {useContext} from 'react';
import {Container} from "@material-ui/core";
import {UserContext} from "./UserContext";



function User(props) {
    const {user} = useContext(UserContext);

    let numWatchedMovies = user.watched.length;
    let numWatchlistMovies = user.watchlist.length;
    let numReviews = user.reviews.length;
    let numFollowers = user.followers.length;
    let numFollowing = user.following.length;

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={user.imageUrl} alt='a user'/>
                <div className ="userDetailsDiv">
                    <h1>{user.name} </h1>
                    <span>{numWatchedMovies} watched movies ~ {numWatchlistMovies} watchlist movies ~ {numReviews} reviews ~ {numFollowers} followers ~ {numFollowing} following</span>
                </div>
                
            </div>
        </Container>
    );
}

export default User;