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
import { blue, green, red } from '@material-ui/core/colors';
import { UserContext } from './UserContext';
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
    const { user, setUser } = useContext(UserContext);

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

    let numMoviesWatched = () => {
        if (props.carduser.watched !== null) {
            return props.carduser.watched;
        } else {
            console.log("carduser.watched is null")
            return 0;
        }
    }

    let numWatchlist = () => {
        if (props.carduser.watchlist.length !== null) {
            return props.carduser.watchlist.length;
        } else {
            console.log("props.carduser.watchlist.length is null")
            return 0;
        }
    }

    let reviewsLength = () => {
        if (props.carduser.reviews.length !== null) {
            return props.carduser.reviews.length;
        } else {
            console.log("props.carduser.reviews.length is null")
            return 0;
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
                                <Typography gutterBottom variant="subtitle1"
                                >
                                    <Link onClick={() => console.log("link to user profile)")}>
                                        {props.carduser.name}
                                    </Link>

                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <VisibilityIcon color="green" style={{ color: green[500] }} fontSize="large" />
                                <span>{numMoviesWatched}</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <AddToQueueIcon color="blue" style={{ color: blue[500] }} fontSize="large" />
                                <span>{numWatchlist}</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <RateReviewIcon color="red" style={{ color: red[500] }} fontSize="large" />
                                <span>{reviewsLength}</span>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => updateNetwork(props.carduser)}
                                className={classes.button} variant={'outlined'}>{props.following}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}