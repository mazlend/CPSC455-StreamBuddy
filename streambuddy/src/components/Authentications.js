import GoogleLogin from "react-google-login";
import React, {useState, Component} from "react";

export default function Authentication() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    // const responseGoogle = (response) => {
    //     setName(response.profileObj.name);
    //     setEmail(response.profileObj.email);
    //     setUrl(response.profileObj.imageUrl);
    //     console.log(response)
    // }
    // console.log(responseGoogle)

    const handleLogin = async googleData => {
        const res = await fetch("/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data + "test");
        // store returned user somehow
    }

    return (
        <div id="loginbutton" style={{marginLeft: 400}}>
            <GoogleLogin clientId="968372237624-r36vh877rae0tkteofmqtap4mtbm9sgh.apps.googleusercontent.com"
                         buttonText="Login"
                         onSuccess={handleLogin}
                         onFailure={handleLogin}
                         cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}