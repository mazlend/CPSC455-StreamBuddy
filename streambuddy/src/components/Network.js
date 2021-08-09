<<<<<<< HEAD
import React, {useContext} from 'react';
import AllUserCards from "./AllUserCards";
import Friends from "./Friends";
import {UserContext} from "./UserContext";

function Network(props) {
    const {user} = useContext(UserContext);

    return(
        <section id={props.id}>
            <div>
                <div>
                    <h1>Followers</h1>
                    <div className="horizontal-line"/>
                </div>
                <Friends friends={user.followers}/>
            </div>
            <br />
            <div>
                <div>
                    <h1>Following</h1>
                    <div className="horizontal-line"/>
                </div>
                <Friends friends={user.following}/>
            </div>
            <br />
            <div>
                <div>
                    <h1>All Users</h1>
                    <div className="horizontal-line"/>
                </div>
                <AllUserCards />
            </div>
=======
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
                console.log(res.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const getFollowers = (user) => {
        axios.get(`http://localhost:5000/api/users/${user._id}`)
            .then((res) => {
                console.log(res.data);
                setFollowers(res.data);
            }).catch((err) => {
                console.log(err);
        })
    }
    useEffect(() => {
        getFollowers(user);
    }, []);

    const getFollowing = (user) => {
        axios.get(`http://localhost:5000/api/users/${user._id}`)
            .then((res) => {
                console.log(res.data.following);
                setFollowing(res.data.following);
            }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
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
>>>>>>> 9b92c142f6d039e2610f31892c33535667923e61
        </section>
    );
}

<<<<<<< HEAD

export default Network;
=======
export default Network;
>>>>>>> 9b92c142f6d039e2610f31892c33535667923e61
