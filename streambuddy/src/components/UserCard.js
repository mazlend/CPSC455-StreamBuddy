import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import { Button, Link } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { blue, green, red } from '@material-ui/core/colors';
import { UserContext } from "./UserContext";
import axios from "axios";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import SingleReview from './SingleReview';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '98%',
    },
    paper2: {
        padding: 3,
        marginTop: "15%"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll'
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
        fontSize: '0.85rem',
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
    },
    linkText: {
        fontWeight: 'bold'
    },
}));

export default function UserCard(props) {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);
    console.log(props.carduser);


    const updateNetwork = (user, carduser) => {
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

    const [open, setOpen] = React.useState(false);
    const [clickedUserWatchlist, setClickedUserWatchlist] = React.useState([])
    const [clickedUserWatched, setClickedUserWatched] = React.useState([])
    const [clickedUserReviews, setClickedUserReviews] = React.useState([]);

    const handlePopoverOpen = () => {
        setOpen(true);
        createClickedUserProfile(props.carduser);
    };

    const handlePopoverClose = () => {
        setOpen(false);
    };

    const createClickedUserProfile = (carduser) => {
        axios.get(`http://localhost:5000/api/users/${carduser._id}`)
            .then((res) => {
                let watched = res.data.watched.map((movie) => movie.Title)
                setClickedUserWatched(watched)
                let watchList = res.data.watchlist.map((movie) => movie.Title)
                setClickedUserWatchlist(watchList)
                setClickedUserReviews(res.data.reviews);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item>
                        <Avatar className={classes.img} alt={props.carduser.name} src={props.carduser.imageUrl} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container spacing={2}>
                            <Grid item xs>
                                <Link
                                    className={classes.linkText}
                                    gutterBottom variant="subtitle1"
                                    onClick={handlePopoverOpen}>
                                    {props.carduser.name}
                                </Link>
                            </Grid>
                        </Grid>
                        <Modal open={open}
                            className={classes.modal}
                            onClose={handlePopoverClose}
                            closeAfterTransition
                            disableScrollLock
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500
                            }}
                            disableRestoreFocus>
                            <Fade in={open}>
                                <div className={classes.paper2}>
                                    <div id="popovertext" style={{ maxWidth: 900, padding: 20, backgroundColor: "white", position: "flex", zIndex: 10 }}>
                                        <p> <h4>Watchlist:</h4> {clickedUserWatchlist} </p> <br />
                                        <p> <h4>Watched:</h4> {clickedUserWatched}</p> <br />
                                        <p> <h4>Reviews:</h4></p>
                                        <div>
                                            {clickedUserReviews.map((review) => (
                                                <div>
                                                    <SingleReview review={review} />
                                                </div>
                                            ))}
                                        </div><br />
                                    </div>
                                </div>
                            </Fade>
                        </Modal>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <VisibilityIcon color="green" style={{ color: green[500] }} fontSize="large" />
                                <span>{props.carduser.watched.length}</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <AddToQueueIcon color="blue" style={{ color: blue[500] }} fontSize="large" />
                                <span>{props.carduser.watchlist.length}</span>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                                <RateReviewIcon color="red" style={{ color: red[800] }} fontSize="large" />
                                <span>{props.carduser.reviews.length}</span>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => updateNetwork(user, props.carduser)}
                                className={classes.button} color="primary" variant="contained">Follow</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        </div>
    );
}