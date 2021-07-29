import GoogleLogin, {GoogleLogout} from "react-google-login";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext";

export default function Authentication(props) {
    const {user, setUser} = useContext(UserContext);

    const onSuccess = async (res) => {
        axios.post('http://localhost:5000/api/users/', res.profileObj)
            .then((response) => {
                setUser(response.data);
                // isLoggedIn = true;
                // props.setUser1(response.data);
                console.log("this should be identical to the later one" + response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    // const getUser = (user) => {
    //     axios.get(`http://localhost:5000/api/users/${user._id}`)
    //         .then((res) => {
    //             if (res.data) {
    //                 user = res.data;
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    const onLogoutSuccess= () => {
        // logout();
        console.log("logout success");
    }

    const onFailure = () => {
        console.log("Login Failed")
    }

    return (
        <div>
            <h3>Login to StreamBuddy with Google</h3>
            {user ? <div>
                    <div className="name">Welcome {user.name}!</div>
                    <div className="email">Your email is: {user.email}</div>
                    <div className="img"><img src={user.imageUrl} alt={""}/></div>
                    <GoogleLogout clientId="968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"
                                  buttonText="Logout"
                                  onLogoutSuccess={onLogoutSuccess}/>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
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