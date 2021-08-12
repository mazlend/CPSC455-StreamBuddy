import React, {useContext} from 'react';
import {Container} from "@material-ui/core";
import {UserContext} from "./UserContext";



function User() {
    const {user} = useContext(UserContext);

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={user.imageUrl} alt='a user'/>
                <div className ="userDetailsDiv">
                    <h1>{user.name} </h1>
                    <span> {user.watched.length} watched movies ~ {user.watchlist.length} watchlist movies ~ {user.reviews.length} reviews ~ {user.followers.length} followers ~ {user.following.length} following</span>
                </div>
            </div>
        </Container>
    );
}

export default User;