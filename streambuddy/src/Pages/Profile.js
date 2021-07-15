import React from 'react';
import CommentInput from '../components/CommentInput';
import {Container} from "@material-ui/core";


function Profile() {

    return(
        <Container maxWidth="lg">
            <div>
                <h1> User profile </h1>
                <CommentInput/>
            </div>
        </Container>
    );
}

export default Profile;