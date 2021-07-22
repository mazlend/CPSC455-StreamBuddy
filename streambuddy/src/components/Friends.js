import React from 'react';
import {Container} from "@material-ui/core";

function Friends() {

    return(
        <Container maxWidth="lg">
            <div>
               <h1>
                   Friends
               </h1>
               <p>
                   Friends contains stats on who the user is following, their followers, options to follow/unfollow others, delete followers and (possibly)
                    recommend a movie to a friend.
               </p>
            </div>
        </Container>
    );
}

export default Friends;