import React, { useContext, useEffect, useState } from 'react';
import UserCards from "./UserCards";
import axios from "axios";
import { UserContext } from "./UserContext";
import NetworkBar from "./NetworkBar";


function Network() {
    const { user } = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowing] = useState([]);


    const getUsers = () => {
        axios.get('/api/users/')
            .then((res) => {
                let usersExceptSelf = res.data.filter((acc) => acc._id !== user._id)
                setUserList(usersExceptSelf);
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const getFollowers = (user) => {
        axios.get(`/api/users/${user._id}/followers`)
            .then((res) => {
                setFollowers(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getFollowers(user);
    }, []);

    const getFollowing = (user) => {
        axios.get(`/api/users/${user._id}/following`)
            .then((res) => {
                setFollowing(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getFollowing(user);
    }, []);


    return (
        <section>
            <div className="movie-cards-wrapper">
                <div>
                    <h1>Followers</h1>
                    <div className="horizontal-line" />
                    <NetworkBar />
                    <UserCards users={followers} />
                </div>
            </div>
            <br />
            <div className="movie-cards-wrapper">
                <div>
                    <h1>Following</h1>
                    <div className="horizontal-line" />
                    <NetworkBar />
                    <UserCards users={followings} />
                </div>
            </div>
            <br />
            <div className="movie-cards-wrapper">
                <div>
                    <h1>All users</h1>
                    <div className="horizontal-line" />
                    <NetworkBar />
                </div>
                <UserCards users={userList} />
            </div>
        </section>
    );
}

export default Network;
