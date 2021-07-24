import React from 'react';
import {Container} from "@material-ui/core";


function User(props) {

    const editButtonClick = () => {
        alert("Implement form to edit user profile!")
    }

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={props.user.imageUrl} onClick={() => editButtonClick()}/>
                <div className ="userDetailsDiv">
                    <h1 onClick={() => editButtonClick()}> {props.user.name} </h1>
                    <span>{props.user.numWatchedMovies.length} watched movies ~ {props.user.reviews.length} reviews </span>
                </div>
            </div>
        </Container>
    );
}

export default User;