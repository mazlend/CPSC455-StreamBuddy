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
    tab: {
        cursor: 'default'
    }
}));

export default function NetworkBar() {
    const classes = useStyles();

    return (
        <Paper square className={classes.root}>
            <Tabs
                variant="fullWidth"
                textColor="black"
            >
                <Tab className={classes.tab} label="Name"  style={{ minWidth: "32%" }} />
                <Tab className={classes.tab} label="Seen"  style={{ minWidth: "18%" }} />
                <Tab className={classes.tab} label="Watchlist"  style={{ minWidth: "8%" }} />
                <Tab className={classes.tab} label="Reviews"  style={{ minWidth: "15%" }} />
                <Tab className={classes.tab}  style={{ minWidth: "22%" }} />
            </Tabs>
        </Paper>

    )

}