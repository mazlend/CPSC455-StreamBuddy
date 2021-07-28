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
// import {Alert} from "@material-ui/lab";
import {UserContext} from "./UserContext";
import {makeStyles} from "@material-ui/core/styles";
import CustomizedAlerts from "./Alerts";
import {Backdrop, Divider, Fade, Modal, Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import RatingsAndReviewInput from "./RatingsAndReviewInput";
import Box from "@material-ui/core/Box";
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
    const auth = useContext(UserContext);
    const [loginReminderAlert, setLoginReminderAlert] = React.useState(false);
    const [successAlert, setSuccessAlert] = React.useState(false);
    const [ratingPopover, setRatingPopover] = React.useState(false);
    const classes = useStyles();

    const updateUserWatched = (user, item) => {
        // let itemId = item._id.toString();
        // let item1 = item.toString();
        console.log(user._id);
        // console.log("film id is " + itemId);
        console.log("this is the item" + item)
        axios.put(`http://localhost:5000/api/users/${user._id}/watched/`, {
            item
        }).then((res) => {
            console.log("this is the response" + res.data)
            auth.login(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    // const getUserWatched = (user) => {
    //     axios.get(`http://localhost:5000/api/users/watched/${user._id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //         }).catch((err) => {
    //             console.log(err);
    //     })
    // }

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
        if (auth.user === null) {
            setLoginReminderAlert(true);
            return;
        }
        console.info(`You clicked ${options[selectedIndex]}`);
        if (options[selectedIndex] === 'Mark As Seen') {
            console.log("Mark as seen from button!!")
            updateUserWatched(auth.user, props.item);
            // auth.user.watched = Object.assign([], auth.user.watched);
            // auth.user.watched.push(props.item);
            setSuccessAlert(true);
            console.log("user watched updated successfully");
            // getUserWatched(auth.user);
        } else if (options[selectedIndex] === 'Add to Watchlist') {
            console.log("Add to Watchlist from button!!!")
            auth.user.watchlist = Object.assign([], auth.user.watchlist);
            auth.user.watchlist.push(props.item);
            console.log(props.item)
            console.log(auth.user.watchlist)
            setSuccessAlert(true)
        } else if (options[selectedIndex] === 'Rate / Review') {
            handlePopoverOpen()
            console.log("Rate / Review from button!!!")
        }
    };

    const handleMenuItemClick = (event, index) => {
        if (auth.user === null) {
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
                            <RatingsAndReviewInput />
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
