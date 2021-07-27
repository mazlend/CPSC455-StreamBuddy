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
import {Alert} from "@material-ui/lab";
import {UserContext} from "./UserContext";

const options = ['Mark As Seen', 'Add to Watchlist', 'Rate / Review'];

export default function MovieCardActions(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const auth = useContext(UserContext);


    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
        if (options[selectedIndex] === 'Mark As Seen') {
            console.log("Mark as seen from button!!")
            auth.user.watched = Object.assign([], auth.user.watched);
            auth.user.watched.push(props.item);
        } else if (options[selectedIndex] === 'Add to Watchlist') {
            console.log("Add to Watchlist from button!!!")
            auth.user.watchlist = Object.assign([], auth.user.watchlist);
            auth.user.watchlist.push(props.item);
        } else if (options[selectedIndex] === 'Rate / Review') {
            console.log("Rate / Review from button!!!")
        }
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
        console.info(`You clicked ${options[index]}`, index);
        if (index === 0) {
            console.log("Mark as seen!!!")
            auth.user.watched = Object.assign([], auth.user.watched);
            auth.user.watched.push(props.item);
        } else if (index === 1) {
            console.log("Add to Watchlist!!!")
            auth.user.watchlist = Object.assign([], auth.user.watchlist);
            auth.user.watchlist.push(props.item);
            console.log(auth.user.watchlist)
        } else if (index === 2) {
            console.log("Rate / Review!!!")
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
