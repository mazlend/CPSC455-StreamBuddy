import React from 'react';

function Friends(props) {

    //TODO: implement followers and following

    return(
        <section id={props.id}>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>My Friends</h1>
                    <div className="horizontal-line"/>
                </div>
                <p>
                    Friends contains stats on who the user is following, their followers, options to follow/unfollow others, delete followers and (possibly)
                    recommend a movie to a friend.
                </p>
            </div>
        </section>
    );
}

export default Friends;