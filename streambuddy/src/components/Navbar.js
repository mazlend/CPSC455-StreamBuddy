import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import SBlogo from '../SBlogo.png';



function ElevationScroll(props) {
    const { children } = props;

    // useScrollTrigger hook is an event listener for when the user is scrolling
    const trigger = useScrollTrigger({
        // should there be little delay when a user is scrolling? Disabled it so there is no delay
        disableHysteresis: true,
        //0 means as soon as the user starts scrolling, event listener is triggered
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        // ...theme.mixins.toolbar,
        marginBottom: "3rem"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        minWidth: 10,
        marginLeft: "25px"

    }
}))


export function Navbar(props) {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/login" && value !==1 ) {
            setValue(1)
        } else if (window.location.pathname === "/signup" && value !==2 ){
            setValue(2)
        }
        //this value tells the useEffect hook that if the value hasn't changed, don't run
        // use effect hook code again
    }, [value]);


    //toolbar helps stack content horizontally
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={ Link } to="/" onClick= {() => setValue(0)}
                                className={classes.logoContainer} disableRipple >
                            <img
                                src={SBlogo}
                                alt="logo"
                                className={classes.logo}
                            />
                        </Button>
                        <Tabs className={classes.tabContainer}
                              value={value}
                              onChange={handleChange}
                              indicatorColor="primary">

                            <Tab className={classes.tab} component={Link} to="/"  label="Home" />
                            <Tab className={classes.tab} component={Link} to="/login" label="Login" />
                            <Tab className={classes.tab} component={Link} to="/signup"     label="Sign up" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/*<div className={classes.toolbarMargin} />*/}
        </React.Fragment>
    );

}