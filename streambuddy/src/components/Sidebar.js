import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import AutocompletePlusCheckbox from "./AutocompletePlusCheckbox";
import RangeSlider from "./RangeSlider";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import MoviecardList from "./MoviecardList";
import {initialActorsData} from "../initialActors";
import {netflixMovieList} from "../netflixMovieList";
import {featuredMovieList} from "../featuredMovieList";


// min and max years available from the API - we use it to init the range slider
let yearRangeAvailable = [1930, 2022];
// the years selected by the user
let selectedYears = [1930, 2022];
//Min and max IMDB rating
let imdbScoreAvailable = [0, 10];
// the scores selected by the user
let selectedImdbScores = [0,10];



// sets the user selected year
function setSelectedYears(years) {
    selectedYears[0] = years[0];
    selectedYears[1] = years[1];
    // TODO: delete logging statement for production
    console.log("selected range = " + selectedYears[0] + " - " + selectedYears[1]);
}

function setSelectedimdbScore(score) {
    selectedImdbScores[0] = score[0];
    selectedImdbScores[1] = score[1];
    // TODO: delete logging statement for production
    console.log("selected range = " + selectedImdbScores[0] + " - " + selectedImdbScores[1]);
}


let allCountries = [
    { item: 'Austria'},
    { item: 'Brazil'},
    { item: 'Canada'},
    { item: 'China'},
    { item: 'Cuba'},
    { item: 'Denmark'},
    { item: 'France'},
    { item: 'Finland'},
    { item: 'Germany'},
    { item: 'Italy'},
    { item: 'Japan'},
    { item: 'Mexico'},
    { item: 'Russia'},
    { item: 'Spain'},
    { item: 'United Kingdom'},
    { item: 'United States of America'}
];

let allLanguages = [
    { item: 'German'},
    { item: 'English'},
];

let allGenre = [
    {item:'Drama'},
    {item:'Thriller'},
    {item:'Romance'},
    {item: 'Horror'},
    {item: 'Action'},
    {item: 'Fantasy'},
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: 1300
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1.5, 3),
        // padding: 15px 10px
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

}));

export default function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Advanced Search
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                {/*<List>*/}
                {/*    {['Test1', 'Test2', 'Test3', 'Test4'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
                <List>
                    <ListItem>
                        <AutocompletePlusCheckbox name="countries" label="Country of Origin" items={allCountries}/>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <AutocompletePlusCheckbox name="languages" label="Language" items={allLanguages}/>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <AutocompletePlusCheckbox name="genere" label="Select Genre" items={allGenre}/>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <SearchBar 
                        title={"Search for Actors"}
                        autoCompleteData = {initialActorsData}
                        getOptionLabel={(option) => option.name}
                        style={{width:200}}
                        />
                    </ListItem>
                    
                    <Divider />

                    <ListItem>
                        <RangeSlider textLabel = {"Year of Release"} minVal={yearRangeAvailable[0]} maxVal={yearRangeAvailable[1]} getSelectedYears={setSelectedYears} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <RangeSlider textLabel = {"IMDB Rating"} minVal={imdbScoreAvailable[0]} maxVal={imdbScoreAvailable[1]} getSelectedYears={setSelectedimdbScore} increments={0.1}/>
                    </ListItem>
                  
                    
                    <Divider />
                    <ListItem>
                        <SearchButton  />
                    </ListItem>
                    
                </List>

               
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <div className="content">
                    <div id="welcome">
                        <h1>Welcome to StreamBuddy</h1>
                        <h2>Search for a movie or use the advanced filters</h2>
                    </div>
                    <div className="search-bar">
                        <SearchBar
                         title={"Search for Movies"}
                         autoCompleteData = {netflixMovieList}
                         getOptionLabel={(option) => option.Title}
                         style={{width:300}} />
                        <div className="advance-button">
                            <SearchButton 
                            btnClass={classes.button1}
                            />
                        </div>

                    </div>
                    <div className="movie-cards">
                        <MoviecardList movieList={featuredMovieList}/>
                    </div>
                </div>
            </main>
        </div>
    );
}