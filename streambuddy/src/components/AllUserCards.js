import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserCard from "./UserCard";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: '#d9e2ee',
        margin: '0 20px',
    },
    list: {
        listStyle: 'none'
    }
}));

export default function AllUserCards() {

    const styles = useStyles();
    const [users, setUsers] = useState([]);

        const getUsers = () => {
            axios.get(('http://localhost:5000/api/users/'))
                .then((res) => {
                    setUsers(res.data);
                    console.log(res.data);
                }).catch((error) => {
                console.log(error);
            });
        }

        useEffect(() => {
            getUsers();
        }, []);


    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li className={styles.list}>
                        <UserCard carduser={user} />
                        <Divider variant={'middle'} className={styles.divider}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

