import GoogleLogin, {GoogleLogout} from "react-google-login";
import React, { useState } from "react";
import axios from "axios";

export default function Authentication(props) {

    // TODO: just some logging: can be removed later
    const logUserState = () => {
        props.user === null? console.log("user is null") : console.log("user is set!");
    }

    const onSuccess = async (res) => {
        console.log(res);
        console.log(res.profileObj);
        console.log("in onSuccess");
        // TODO: why post?
        axios.post('http://localhost:5000/api/users/', res.profileObj)
            .then((response) => {
            console.log(response);
            console.log("login success");
            getUser(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const getUser = (userData) => {
        axios.get(`http://localhost:5000/api/users/${userData._id}`)
            .then((res) => {
                if (res.data) {
                    props.updateUser(res.data);
                    console.log(res.data);
                    console.log("passing user from Authentication to Login through callback");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onLogoutSuccess= () => {
        console.log("logout success");
        props.updateUser(null);
        console.log("passing user from Authentication to Login through callback");
        console.log(props.user);
    }

    const onFailure = (err) => {
        console.log("Login Failed");
        console.error(err);
    }

    return (
        <div>
            <h3>Login to StreamBuddy with Google</h3>
            {console.log("Authentication: checking the user status")}
            {console.log("props.user is ", props.user)}
            {props.user ? <div>
                    <div className="name">Welcome {props.user.name}!</div>
                    <div className="email">Your email is: {props.user.email}</div>
                    <div className="img"><img src={props.user.imageUrl} alt={""}/></div>
                    {logUserState()}
                    <GoogleLogout clientId="968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"
                                  buttonText="Logout"
                                  onLogoutSuccess={onLogoutSuccess}/>
                    <pre>{JSON.stringify(props.user, null, 2)}</pre>
                </div> :
            <GoogleLogin clientId="968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"
                         buttonText="Login"
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy={'none'}
                         isSignedIn={true}
            />}

        </div>
    );
}