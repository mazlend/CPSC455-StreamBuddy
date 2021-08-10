import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NetworkBar() {
    const classes = useStyles();

    return (
        <Paper square className={classes.root}>
            <Tabs
                variant="fullWidth"
                textColor="black"
            >
                <Tab label="Name"   disableRipple style={{minWidth:"26%"}}/>
                <Tab label="Seen"  disableRipple style={{minWidth:"5%"}}/>
                <Tab label="Watchlist"  disableRipple style={{minWidth:"30%"}}/>
                <Tab label="Reviews"  disableRipple style={{minWidth:"14%"}}/>
                <Tab disableRipple style={{minWidth:"20%"}}/>
            </Tabs>
        </Paper>

    )

}