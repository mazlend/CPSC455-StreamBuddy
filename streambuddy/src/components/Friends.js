import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import UserCard from "./UserCard";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: '#d9e2ee',
        margin: '0 20px',
    },
    list: {
        listStyle: 'none'
    }
}));

export default function Friends(props) {
    const styles = useStyles();

    if (props.friends.length < 1) {
        return(
            <div className="movie-cards">
                <p style={{marginBottom: 40}}>Your list is empty :( <br /> Add some friends by following them!!! </p>
            </div>

        )
    } else {
        return (
            <div>
                <ul>
                    {props.friends.map((friend) => (
                        <li className={styles.list}>
                            <UserCard carduser={friend} following={props.following} deactivateIfAlreadyFollowing={false} />
                            <Divider variant={'middle'} className={styles.divider}/>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}



