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

const options = ['Mark As Seen', 'Add to Watchlist', 'Remove from Watched Films', 'Remove from Watchlist', 'Rate / Review'];

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
    const [errorAlert, setErrorAlert] = React.useState(false);
    const [errorAlert1, setErrorAlert1] = React.useState(false);
    const [errorAlert2, setErrorAlert2] = React.useState(false);
    const [ratingPopover, setRatingPopover] = React.useState(false);
    const classes = useStyles();
    const {user, setUser} = useContext(UserContext);


    const updateUserWatched = (user, item) => {
        axios.put(`/api/users/${user._id}/watched/`, {
            item
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteUserWatched = (user, item) => {
        axios.delete(`/api/users/${user._id}/watched/`, {
            data: item
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateUserWatchlist = (user, item) => {
        axios.put(`/api/users/${user._id}/watchlist/`, {
            item
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteUserWatchlist = (user, item) => {
        axios.delete(`/api/users/${user._id}/watchlist/`, {
            data: item
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
        setSuccessAlert(true)
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setLoginReminderAlert(false);
        setSuccessAlert(false);
        setErrorAlert(false);
        setErrorAlert1(false);
        setErrorAlert2(false);
    };

    const handleClick = () => {
        if (user === null) {
            setLoginReminderAlert(true);
            return;
        }
        if (options[selectedIndex] === 'Mark As Seen') {
            if (!user.watched.some(e => e._id === props.item._id)) {
                updateUserWatched(user, props.item);
                setSuccessAlert(true);
            }
            if (user.watched.some(e => e._id === props.item._id)) {
                setErrorAlert(true);
            }
        } else if (options[selectedIndex] === 'Add to Watchlist') {
            if (!user.watchlist.some(e => e._id === props.item._id)) {
                updateUserWatchlist(user, props.item);
                setSuccessAlert(true);
            }
            if (user.watchlist.some(e => e._id === props.item._id)) {
                setErrorAlert(true);
            }
        } else if (options[selectedIndex] === 'Remove from Watchlist') {
            if (!user.watchlist.some(e => e._id === props.item._id)) {
                setErrorAlert1(true);
            }
            if (user.watchlist.some(e => e._id === props.item._id)) {
                deleteUserWatchlist(user, props.item);
                setSuccessAlert(true);
            }
        } else if (options[selectedIndex] === 'Remove from Watched Films') {
            if (!user.watched.some(e => e._id === props.item._id)) {
                setErrorAlert1(true);
            }
            if (user.watched.some(e => e._id === props.item._id)) {
                deleteUserWatched(user, props.item);
                setSuccessAlert(true);
            }
        } else if (options[selectedIndex] === 'Rate / Review') {
            if (!user.reviews.some(e => e.movieTitle === props.item.Title)) {
                handlePopoverOpen();
            }
            if (user.reviews.some(e => e.movieTitle === props.item.Title)) {
                setErrorAlert2(true);
            }
        }
    };

    const handleMenuItemClick = (event, index) => {
        if (user === null) {
            setLoginReminderAlert(true);
            return;
        }
        setSelectedIndex(index);
        setOpen(false);
        if (index === 0) {
        } else if (index === 1) {
        } else if (index === 2) {
        } else if (index === 3) {
        } else if (index === 4) {
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

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
                </Snackbar>
                <Snackbar open={errorAlert} autoHideDuration={3000} onClose={handleClose1}>
                    <Alert onClose={handleClose1} severity="error">
                        Error: This Movie is already in your list!
                    </Alert>
                </Snackbar>
                <Snackbar open={errorAlert1} autoHideDuration={3000} onClose={handleClose1}>
                    <Alert onClose={handleClose1} severity="error">
                        Error: This Movie is not in your list!
                    </Alert>
                </Snackbar>
                <Snackbar open={errorAlert2} autoHideDuration={3000} onClose={handleClose1}>
                    <Alert onClose={handleClose1} severity="error">
                        Error: You've already reviewed this movie!
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
                            <img src={props.item.Poster} alt='a film poster'/>
                            <RatingsAndReviewInput filmId={props.item._id} moviePoster={props.item.Poster} movieTitle={props.item.Title} onPostClick={handlePopoverClose} />
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
