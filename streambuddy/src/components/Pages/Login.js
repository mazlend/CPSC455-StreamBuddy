import React from 'react';
import Authentication from "../Authentications";
import {Container} from "@material-ui/core";


function Login() {

    return(
        <Container maxWidth="lg">
            <div>
                <h1> Login or Register </h1>
                <Authentication/>
            </div>
        </Container>
    );
}

export default Login;