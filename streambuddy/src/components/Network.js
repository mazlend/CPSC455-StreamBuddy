import React, {useContext, useEffect, useState} from 'react';
import UserCards from "./UserCards";
import axios from "axios";
import {UserContext} from "./UserContext";

function Network() {
    const {user} = useContext(UserContext);
    const [userList, setUserList] = useState([]);

    const getUsers = () => {
        axios.get(('http://localhost:5000/api/users/'))
            .then((res) =>{
                setUserList(res.data);
                console.log(res.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);


    return(
        <section>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>All users</h1>
                    <div className="horizontal-line"/>
                </div>
                <UserCards users={userList}/>
            </div>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>Followers</h1>
                    <div className="horizontal-line"/>
                    <UserCards users={user.followers}/>
                </div>
            </div>
            <br />
            <div className="movie-cards-wrapper">
                <div>
                    <h1>Following</h1>
                    <div className="horizontal-line"/>
                    <UserCards users={user.following}/>
                </div>
            </div>
            <br />
        </section>
    );
}

export default Network;