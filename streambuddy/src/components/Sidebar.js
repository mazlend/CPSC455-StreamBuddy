import React, {useState} from 'react';
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
import LanguageSelector from './LanguageSelector';
import GenreSelector from './GenreSelector';
import ActorSelector from './ActorSelector';
import YearOfRelease from "./YearOfRelease";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import AdvanceSearchButton from "./AdvanceSearchButton";
import MoviecardList from "./MoviecardList";
import { initialActorsData } from "../initialActors";
import { netflixMovieList } from "../netflixMovieList";
import { featuredMovieList } from "../featuredMovieList";
import {initialmoviesdata} from "../initialmovies";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CountrySelector from './CountrySelector';
import ImdbScoreSelector from './ImdbScoreSelector';



// min and max years available from the API - we use it to init the range slider
let yearRangeAvailable = [1930, 2022];
// the years selected by the user
let selectedYears = [1930, 2022];
//Min and max IMDB rating
let imdbScoreAvailable = [0, 10];
// the scores selected by the user
let selectedImdbScores = [0, 10];


// sets the user selected year
function setSelectedYears(years) {
    selectedYears[0] = years[0];
    selectedYears[1] = years[1];
    // TODO: delete logging statement for production
    //console.log("selected range = " + selectedYears[0] + " - " + selectedYears[1]);
}

function setSelectedimdbScore(score) {
    selectedImdbScores[0] = score[0];
    selectedImdbScores[1] = score[1];
    // TODO: delete logging statement for production
    //console.log("selected range = " + selectedImdbScores[0] + " - " + selectedImdbScores[1]);
}

let allCountries = [
    { item: 'Austria' },
    { item: 'Brazil' },
    { item: 'Canada' },
    { item: 'China' },
    { item: 'Cuba' },
    { item: 'Denmark' },
    { item: 'France' },
    { item: 'Finland' },
    { item: 'Germany' },
    { item: 'Italy' },
    { item: 'Japan' },
    { item: 'Mexico' },
    { item: 'Pakistan'},
    { item: 'Russia' },
    { item: 'Spain' },
    { item: 'United Kingdom' },
    { item: 'United States of America' }
    
];

let allLanguages = [
    { item: 'German' },
    { item: 'English' },
];

let allGenre = [
    { item: 'Drama' },
    { item: 'Thriller' },
    { item: 'Romance' },
    { item: 'Horror' },
    { item: 'Action' },
    { item: 'Fantasy' },
];

let allActors = [
    {item: "Leonardo DiCaprio"},
    {item: "Keanu Reeves"},
    {item:"Dwayne Johnson"},
    {item: "Scarlett Johansson"},
    {item: "Natalie Portman"}, 
    {item: "Marlon Brando"},
    {item: "Audrey Hepburn"},
    {item: "James Dean"},
]
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        top: 98,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: 1300,
        top:98,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        top:98,
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
        marginTop: 98,
        top: 98,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        marginTop: -98,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

}),{index: 1});



export default function Sidebar() {
    var searchOptions = [];
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [list, setList] = useState(featuredMovieList);

    

    const [filmName, setFilmName] = React.useState("");

    const [countryName, setCountryName] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [actorName, setActorName] = React.useState("");
    const [year, setYear] = React.useState(["", ""]);
    const [rating, setRating] = React.useState(["", ""]);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleCallback(filmName) {
        setFilmName(filmName);
    }

    function handleListCallback(filmList) {
        console.log(filmList)
        setList(filmList);
    }

    function handleCountryCallback(countryName) {      
        setCountryName(countryName);
        searchOptions.push({Country:countryName});
        console.log(searchOptions);
    }

    
    function handleLanguageCallback(language) {      
        setLanguage(language);
        searchOptions.push({Language:language});
        console.log(searchOptions);
    }

    function handleGenreCallback(genre) {      
        setGenre(genre);
        searchOptions.push({Genre:genre});
        console.log(searchOptions);
    }

    function handleActorCallback(actorName) {      
        setActorName(actorName);
        searchOptions.push({Actor:actorName});
        console.log(searchOptions);
    }

    function handleYearCallback(selectedYears) {      
        setYear(selectedYears);
    }

    function handleRatingCallback(selectedImdbScores) {      
        setRating(selectedImdbScores);
    }

    function resetList() {
        setList(featuredMovieList);
    }



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
                        <CountrySelector
                         name="countries"
                         label="Country of Origin" 
                         items={allCountries}
                         countryCallBack = {handleCountryCallback}
                          />
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <LanguageSelector
                         name="languages"
                         label="Language" 
                         items={allLanguages}
                         languageCallBack = {handleLanguageCallback} 
                         />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <GenreSelector
                         name="genere"
                         label="Select Genre" 
                         items={allGenre}
                         genreCallBack = {handleGenreCallback}
                          />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ActorSelector
                            name="actors"
                            label="Select Actors" 
                            items={allActors}
                            actorCallBack = {handleActorCallback} 
                        />
                    </ListItem>

                    <Divider />

                    <ListItem>
                        <YearOfRelease 
                            textLabel={"Year of Release"} 
                            minVal={yearRangeAvailable[0]} 
                            maxVal={yearRangeAvailable[1]} 
                            getSelectedYears={handleYearCallback} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ImdbScoreSelector
                            textLabel={"IMDB Rating"} 
                            minVal={imdbScoreAvailable[0]} 
                            maxVal={imdbScoreAvailable[1]} 
                            getSelectedYears={handleRatingCallback} 
                            increments={0.1} />
                    </ListItem>


                    <Divider />
                    <ListItem>
                        <AdvanceSearchButton
                        btnClass={classes.button1}
                        country={countryName}
                        language = {language}
                        genre = {genre}
                        actors = {actorName}
                        yearOfRelease = {year}
                        imdbRating = {rating}
                        //query={getSearch}
                        listCallback={handleListCallback}
                        resetList={resetList} />
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
                            parentCallBack={handleCallback}
                            title={"Search for Movies"}
                            autoCompleteData={netflixMovieList}
                            getOptionLabel={(option) => option.Title}
                            style={{ width: 300 }} />
                        <div className="advance-button">
                            <SearchButton
                                btnClass={classes.button1}
                                filmName={filmName}
                                listCallback={handleListCallback}
                                resetList={resetList}
                            />
                        </div>

                    </div>
                    <div className="movie-cards">
                        <MoviecardList list={list} />
                    </div>
                </div>
            </main>
        </div>
    );
}
