import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
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

    const followUser = (user, userToFollow) => {
        axios.put(`http://localhost:5000/api/users/${user._id}/following/`, {
            userToFollow
        }).then((res) => {
            setUser(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
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
                                <RateReviewIcon color="red" style={{ color: red[500] }} fontSize="large" />
                                <span>{props.carduser.reviews.length}</span>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={followUser(user, props.carduser._id)}
                                className={classes.button} variant={'outlined'}>Follow</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}