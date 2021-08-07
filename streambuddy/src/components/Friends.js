import React from 'react';
import UserCard from './UserCard';
import UserCards from "./UserCards";

function Friends(props) {

    // TODO: implement followers and following

    return(
        <section id={props.id}>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>My Friends</h1>
                    <div className="horizontal-line"/>
                </div>
                <UserCards />
            </div>
        </section>
    );
}

export default Friends;