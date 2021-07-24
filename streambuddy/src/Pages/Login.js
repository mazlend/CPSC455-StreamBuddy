import Authentication from "../components/Authentications";
import {Container} from "@material-ui/core";
import React from 'react';


function Login(props) {

    const updateUser = (user) => {
        props.updateUser(user);
        console.log("passing user info from Login to App through a callback");
    }

    const logUserState = () => {
        props.user === null? console.log("Login: user is null") : console.log("Login: user is set!");
    }

    return(
        <Container maxWidth="lg">
            <div>
                <h1> Login or Register </h1>
                {logUserState()}
                <Authentication user={props.user} updateUser={updateUser}/>
            </div>
        </Container>
    );
}

export default Login;