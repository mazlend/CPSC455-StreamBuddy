import React from 'react';
import UserCards from "./UserCards";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

function Friends(props) {

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