import React from 'react';
import UserCard from './UserCard';

function Friends(props) {

    // TODO: implement followers and following

    return(
        <section id={props.id}>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>My Friends</h1>
                    <div className="horizontal-line"/>
                </div>
                <UserCard />
            </div>
        </section>
    );
}

export default Friends;