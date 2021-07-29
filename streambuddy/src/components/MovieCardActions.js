import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {UserContext} from "./UserContext";
import {makeStyles} from "@material-ui/core/styles";
import {Backdrop, Divider, Fade, Modal, Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import RatingsAndReviewInput from "./RatingsAndReviewInput";
import axios from "axios";

const options = ['Mark As Seen', 'Add to Watchlist', 'Rate / Review'];

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
        padding: 3,
        marginTop: "15%"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'scroll'
    },
}));

export default function MovieCardActions(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [loginReminderAlert, setLoginReminderAlert] = React.useState(false);
    const [successAlert, setSuccessAlert] = React.useState(false);
    const [ratingPopover, setRatingPopover] = React.useState(false);
    const classes = useStyles();
    const {user, setUser} = useContext(UserContext);


    const updateUserWatched = (user, item) => {
        axios.put(`http://localhost:5000/api/users/watched/${user._id}/`, {
            item
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateUserWatchlist = (user, item) => {
        axios.put(`http://localhost:5000/api/users/watchlist/${user._id}/`, {
            item
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const handlePopoverOpen = (event) => {
        setRatingPopover(true);
    };

    const handlePopoverClose = () => {
        setRatingPopover(false);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setLoginReminderAlert(false);
        setSuccessAlert(false);
    };

    const handleClick = () => {
        if (user === null) {
            setLoginReminderAlert(true);
            return;
        }
        console.info(`You clicked ${options[selectedIndex]}`);
        if (options[selectedIndex] === 'Mark As Seen') {
            console.log("Mark as seen from button!!")
            updateUserWatched(user, props.item);
            setSuccessAlert(true);
            console.log("user watched updated successfully");
        } else if (options[selectedIndex] === 'Add to Watchlist') {
            console.log("Add to Watchlist from button!!!")
            updateUserWatchlist(user, props.item);
            setSuccessAlert(true)
        } else if (options[selectedIndex] === 'Rate / Review') {
            handlePopoverOpen()
            console.log("Rate / Review from button!!!")
        }
    };

    const handleMenuItemClick = (event, index) => {
        if (user === null) {
            setLoginReminderAlert(true);
            return;
        }
        setSelectedIndex(index);
        setOpen(false);
        console.info(`You clicked ${options[index]}`, index);
        if (index === 0) {
        } else if (index === 1) {
        } else if (index === 2) {
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        console.log("In handleClose")
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    // checks whether the user has already reviewed this movie
    const alreadyReviewed = () => {
        console.log("checking if alreadyReviewed")
        if (!user || user.reviews || !Array.isArray(user.reviews) || !user.reviews.length) {
            console.log("user: ", user)
            console.log("user.reviews: ", user.reviews)
            console.log("return false")
            return false;
          }
        const movieAlreadyReviewed = user.reviews.filter(review => review.movieTitle === props.item.Title)
        console.log("movieAlreadyReviewed is ", movieAlreadyReviewed);
        if (movieAlreadyReviewed === 1) {
            console.log("this movie has already been reviewed")
            return true;
        } else {
            console.log("this movie has not yet been removed")
            return false;
        }
    }

    // TOODO: add movieId={props.item._id} to Reviews once we use real data (so we can reuse the reviews for more purposes)

    return (

        <Grid container direction="column" alignItems="center">
            <div className={classes.root}><Snackbar open={loginReminderAlert} autoHideDuration={3000} onClose={handleClose1}>
                <Alert onClose={handleClose1} severity="info">
                    Please Login/Register first!
                </Alert>
            </Snackbar>
                <Snackbar open={successAlert} autoHideDuration={3000} onClose={handleClose1}>
                    <Alert onClose={handleClose1} severity="success">
                        Success!
                    </Alert>
                </Snackbar></div>
            <Modal open={ratingPopover}
                   className={classes.modal}
                   onClose={handlePopoverClose}
                   closeAfterTransition
                   disableScrollLock
                   BackdropComponent={Backdrop}
                   BackdropProps={{
                       timeout:500}}
                   disableRestoreFocus>
                <Fade in={ratingPopover}>
                    <div className={classes.paper}>
                        <div id="popovertext" style={{maxWidth: 900, width: 500, padding: 40, backgroundColor: "white", position: "flex", zIndex:10}}>
                            <h1>Rate And Review</h1>
                            <Divider />
                            <h2 style={{marginTop: 20, marginBottom: 20}}> {props.item.Title}</h2>
                            <img src={props.item.Poster}/>
                            <RatingsAndReviewInput moviePoster={props.item.Poster} movieTitle={props.item.Title} onPostClick={handlePopoverClose} />
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Grid item xs={12}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:1}}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" style={{zIndex: 1}}>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                // disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
}
