import GoogleLogin, {GoogleLogout} from "react-google-login";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext";

export default function Authentication() {
    let auth = useContext(UserContext);

    const onSuccess = async (res) => {
        axios.post('http://localhost:5000/api/users/', res.profileObj)
            .then((response) => {
                auth.login(response.data);
                console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    // const getUser = (user) => {
    //     axios.get(`http://localhost:5000/api/users/${user._id}`)
    //         .then((res) => {
    //             if (res.data) {
    //                 auth.user = res.data;
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    const onLogoutSuccess= () => {
        auth.logout();
        console.log("logout success");
    }

    const onFailure = () => {
        console.log("Login Failed")
    }

    return (
        <div>
            <h3>Login to StreamBuddy with Google</h3>
            {auth.user ? <div>
                    <div className="name">Welcome {auth.user.name}!</div>
                    <div className="email">Your email is: {auth.user.email}</div>
                    <div className="img"><img src={auth.user.imageUrl} alt={""}/></div>
                    <GoogleLogout clientId="968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"
                                  buttonText="Logout"
                                  onLogoutSuccess={onLogoutSuccess}/>
                    <pre>{JSON.stringify(auth.user, null, 2)}</pre>
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