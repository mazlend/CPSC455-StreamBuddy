import GoogleLogin, {GoogleLogout} from "react-google-login";
import React, { useState } from "react";
import axios from "axios";

export default function Authentication() {
    const [user, setUser] = useState(null);

    const onSuccess = (res) => {
        axios.post('http://localhost:5000/api/users/', res.profileObj)
            .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        getUser(res.profileObj);
    }

    const getUser = (user) => {
        axios.get(`http://localhost:5000/api/users/${user.googleId}`)
            .then((res) => {
                if (res.data) {
                    setUser(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onLogoutSuccess= () => {
        console.log("logout success")
        setUser(null);
        console.log(user)
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