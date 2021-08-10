import React, {useContext, useEffect, useState} from 'react';
import UserCards from "./UserCards";
import axios from "axios";
import {UserContext} from "./UserContext";

function Network() {
    const {user} = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowing] = useState([]);

    console.log(followers);
    console.log(followings);

    const getUsers = () => {
        axios.get('http://localhost:5000/api/users/')
            .then((res) =>{
                setUserList(res.data);
                // console.log(res.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const getFollowers = (user) => {
        axios.get(`http://localhost:5000/api/users/${user._id}/followers`)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    setFollowers(res.data);
                } else {
                    console.log("followers is null");
                }
            }).catch((err) => {
                console.log(err);
        })
    }
    useEffect(() => {
        console.log("foo")
        getFollowers(user);
    }, []);

    const getFollowing = (user) => {
        axios.get(`http://localhost:5000/api/users/${user._id}/following`)
            .then((res) => {
                console.log(res.data);
                setFollowing(res.data);
            }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        console.log("boo")
        getFollowing(user);
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
                    <UserCards users={followers}/>
                </div>
            </div>
            <br />
            <div className="movie-cards-wrapper">
                <div>
                    <h1>Following</h1>
                    <div className="horizontal-line"/>
                    <UserCards users={followings}/>
                </div>
            </div>
            <br />
        </section>
    );
}

export default Network;
