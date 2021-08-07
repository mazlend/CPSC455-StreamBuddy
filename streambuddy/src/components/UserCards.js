import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserCard from "./UserCard";

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


    return (
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {userList.map((user) => (
                        <li className='cards-item'>
                            <UserCard user={user}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

