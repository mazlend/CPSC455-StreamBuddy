import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
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
                <Tab label="Name"  style={{ minWidth: "35%" }} />
                <Tab label="Seen"  style={{ minWidth: "19%" }} />
                <Tab label="Watchlist"  style={{ minWidth: "9%" }} />
                <Tab label="Reviews"  style={{ minWidth: "15%" }} />
                <Tab style={{ minWidth: "20%" }} />
            </Tabs>
        </Paper>

    )

}