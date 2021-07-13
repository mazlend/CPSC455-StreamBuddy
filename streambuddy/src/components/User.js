import React from 'react';
import {Container} from "@material-ui/core";
import Authentication from "../components/Authentications";
import profilePicture from "../assets/profilePic.png"
import editButton from "../assets/editButton.png"
import { maxWidth } from '@material-ui/system';


function User() {

    // dummy data for a user, we will later pass those through props and/or retrieve from database
    let profileName = "popcornFan";
    let numLikedMovies = 20;
    let numFollowers = 5;
    let numFollowing = 7;

    const editButtonClick = () => {
        alert("Implement form to edit user profile!")
    }

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={profilePicture} onClick={() => editButtonClick()}/>
                <div className ="userDetailsDiv">
                    <h1 onClick={() => editButtonClick()}> {profileName} </h1>
                    <span>{numLikedMovies} liked movies ~ {numFollowers} followers ~ {numFollowing} following</span>
                </div>
                
            </div>
        </Container>
    );
}

export default User;