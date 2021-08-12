import GoogleLogin, {GoogleLogout} from "react-google-login";
import React, {useContext} from "react";
import axios from "axios";
import {UserContext} from "./UserContext";
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

export default function Authentication() {
    const {user, setUser} = useContext(UserContext);

    const onSuccess = async (res) => {
        axios.post('/api/users/', res.profileObj)
            .then((response) => {
                setUser(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const onLogoutSuccess= () => {
        setUser(null);
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
                    <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                  buttonText="Logout"
                                  onLogoutSuccess={onLogoutSuccess}/>
                </div> :
            <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                         buttonText="Login"
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy={'none'}
                         isSignedIn={true}
            />}

        </div>
    );
}