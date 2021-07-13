import React from 'react';
import CommentInput from '../components/CommentInput';
import User from '../components/User';
import {Container} from "@material-ui/core";
import Authentication from "../components/Authentications";
import profilePicture from "../assets/profilePic.png"
import editButton from "../assets/editButton.png"
import { maxWidth } from '@material-ui/system';


function Profile() {

    // dummy data for a user, we will later pass those through props and/or retrieve from database
    let profileName = "popcornFan";

    return(
        <Container maxWidth="lg">
            <div>
                <User/>
                <CommentInput/>
            </div>
        </Container>
    );
}

export default Profile;