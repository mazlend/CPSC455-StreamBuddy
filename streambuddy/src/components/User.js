import React from 'react';
import {Container} from "@material-ui/core";
import Authentication from "../components/Authentications";
import profilePicture from "../assets/profilePic.png"
import editButton from "../assets/editButton.png"
import { maxWidth } from '@material-ui/system';


function User() {

    // dummy data for a user, we will later pass those through props and/or retrieve from database
    let profileName = "popcornFan";

    const editButtonClick = () => {
        alert("Implement form to edit user profile!")
    }

    return(
        <Container maxWidth="lg">
            <div className="userDiv">  
                <img className="userImg" src={profilePicture} onClick={() => editButtonClick()}/>
                <b onClick={() => editButtonClick()}> {profileName} </b>
                <img className="smallIcon" src={editButton} onClick={() => editButtonClick()}/>
            </div>
        </Container>
    );
}

export default User;