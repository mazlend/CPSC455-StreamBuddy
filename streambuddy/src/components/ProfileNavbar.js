import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MoviecardListWrapper from "./MoviecardListWrapper";
import Reviews from "./Reviews";
import Friends from "./Friends";
import {UserContext} from "./UserContext";

function TabPanel(props) {
    let { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ProfileNavbar(props) {

    const classes = useStyles();
    let [value, setValue] = React.useState(0);
    let tempWatchList = props.watchList;
    let tempWatchedMovies = props.watchedMovies;
    console.log("frontendcheck" + tempWatchList + tempWatchedMovies)
    const {user, setUser} = useContext(UserContext);

    console.log("this is from profile navbar" + JSON.stringify(user))
    console.log(user)
    const [views, setViews] = React.useState(
        {
            denseViewWatchList: false,
            denseViewWatchedMovies: false
        }
    )

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Watchlist" {...a11yProps(0)} />
                    <Tab label="Movies I've Seen" {...a11yProps(1)} />
                    <Tab label="My Reviews" {...a11yProps(2)} />
                    <Tab label="My Friends" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MoviecardListWrapper id="watchlist" name="Watchlist" movieList={user.watchlist} denseView={views.denseViewWatchList}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MoviecardListWrapper id="watchedMovies" name="Watched Movies" movieList={user.watched} denseView={views.denseViewWatchedMovies} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Reviews id="reviews" reviews={user.reviews} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Friends id="friends" />
            </TabPanel>
        </div>
    );
}
export default ProfileNavbar;





