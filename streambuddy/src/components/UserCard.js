import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import {Button, Link} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RateReviewIcon from '@material-ui/icons/RateReview';
import {blue, green, red} from '@material-ui/core/colors';
import {UserContext} from "./UserContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '98%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    button: {
        borderRadius: 20,
        padding: '0.125rem 0.75rem',
        borderColor: '#becddc',
        fontSize: '0.75rem',
    },
}));

export default function UserCard(props) {
    const classes = useStyles();
    const { user, setUser} = useContext(UserContext);
    console.log(props.carduser);

    let numMoviesWatched = () => {
        if (props.carduser.watched !== null) {
            return props.carduser.watched;
        } else {
            console.log("carduser.watched is null")
            return 0;
        }
    }


    const updateNetwork = (user, carduser)  => {
        updateFollowing(user, carduser);
        updateFollowers(user, carduser);
    }

    const updateFollowing = (user, carduser) => {
        if (user._id !== carduser._id && !user.following.includes(carduser._id)) {
            axios.put(`http://localhost:5000/api/users/${user._id}/following/`, {
                 carduserId: carduser._id
            }).then((res) => {
                console.log(res.data);
                setUser(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const updateFollowers = (user, carduser) => {
        if (user._id !== carduser._id && !carduser.followers.includes(user._id)) {
            axios.put(`http://localhost:5000/api/users/${carduser._id}/followers/`, {
                userId: user._id
            }).then((res) => {
                console.log(res.data);
                carduser.followers = res.data.followers;
            }).catch((err) => {
                console.log(err);
            })
        }

    }

    const updateNetwork = (carduser)  => {
        updateFollowing(carduser);
        updateFollowers(carduser);
    }


    const updateFollowing = (carduser) => {
        console.log(user.following);
        if (!user.following.includes(carduser)) {
            console.log(!user.following.includes(carduser));
            axios.put(`http://localhost:5000/api/users/${user._id}/following/`, {
                user: carduser
            }).then((res) => {
                setUser(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const updateFollowers = (carduser) => {
        if (!carduser.followers.includes(user)) {
            axios.put(`http://localhost:5000/api/users/${carduser._id}/followers/`, {
                user: user
            }).then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item>
                        <Avatar className={classes.img} alt={props.carduser.name} src={props.carduser.imageUrl} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.carduser.name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                                <VisibilityIcon color="green" style={{ color: green[500] }} fontSize="large"/>
                                <span>{ numMoviesWatched }</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                                <AddToQueueIcon color="blue" style={{ color: blue[500] }} fontSize="large"/>
                                <span>{ numMoviesWatched}</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                                <RateReviewIcon color="red" style={{ color: red[500] }} fontSize="large"/>
                                <span>{ numMoviesWatched}</span>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => updateNetwork(user, props.carduser)}
                                className={classes.button} variant={'outlined'}>Follow</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}