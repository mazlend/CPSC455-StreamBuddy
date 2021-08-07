import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserCard from "./UserCard";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

export default function UserCards() {

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

    const useStyles = makeStyles(() => ({
        divider: {
            backgroundColor: '#d9e2ee',
            margin: '0 20px',
        }
    }));

    const styles = useStyles();


    return (
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {userList.map((user) => (
                        <li className='cards-item'>
                            <UserCard carduser={user}/>
                            <Divider variant={'middle'} className={styles.divider}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

