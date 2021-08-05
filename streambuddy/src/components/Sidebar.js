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
import { netflixMovieList } from "../netflixMovieList";
import { featuredMovieList } from "../featuredMovieList";
import MoviecardList from "./MoviecardList";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import AdvanceSearchButton from "./AdvanceSearchButton";
import AutocompletePlusCheckbox from "./AutocompletePlusCheckbox";
import RangeSlider from "./RangeSlider";



// min and max years available from the API - we use it to init the range slider
let yearRangeAvailable = [1930, 2022];
//Min and max IMDB rating
let imdbScoreAvailable = [0, 10];


//TODO: countries below are temp countries.
// Pull all countries data from our database and allow users to search for films based on real countries data
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
    { item: 'USA' },
    { item: 'India' },
    { item: 'Nigeria' },
    { item: 'Egypt' },
    { item: 'Spain' },
    { item: 'Norway' },
    { item: 'Sweden' },
    { item: 'Netherlands' },
    { item: 'Singapore' },
    { item: 'Mongolia' },
    { item: 'Iceland' },
    { item: 'Hungary' },
    { item: 'Italy' },

];
allCountries.sort();

//TODO: languages below are temp languages.
// Pull all languages data from our database and allow users to search for films based on real languages data
let allLanguages = [
    { item: 'German' },
    { item: 'English' },
    { item: 'French' },
    { item: 'Spanish' },
    { item: 'Italian' },
    { item: 'Hindi' },
    { item: 'Arabic' },
    { item: 'Dutch' },
    { item: 'Portuguese' },
    { item: 'Russian' },
    { item: 'Ukrainian' },
    { item: 'Polish' },
    { item: 'Yoruba' },
    { item: 'Japanese' },
    { item: 'Chinese' },
    { item: 'Korean' },
    { item: 'Malay' },
    { item: 'Tamil' },
    { item: 'Farsi' },
    { item: 'Greek' },
    { item: 'Norwegian' },
    { item: 'Swedish' },
];
allLanguages.sort();

//TODO: genres below are temp genres.
// Pull all genres data from our database and allow users to search for films based on real genre data
let allGenre = [
    { item: 'Drama' },
    { item: 'Thriller' },
    { item: 'Romance' },
    { item: 'Horror' },
    { item: 'Action' },
    { item: 'Fantasy' },
    { item: 'Comedy' },
    { item: 'History' },
    { item: 'Crime' },
    { item: 'Western' },
    { item: 'Documentary' },
    { item: 'War' },
    { item: 'Noir' },
    { item: 'Animation' },
    { item: 'Music' },
    { item: 'Musical' },
    { item: 'Biography' },
    { item: 'Sport' },
];
allGenre.sort();

//TODO: actors below are temp actors.
// Pull all actors data from our database and allow users to search for films based on real actors data
let allActors = [
    {item: "Leonardo DiCaprio"},
    {item: "Keanu Reeves"},
    {item:"Dwayne Johnson"},
    {item: "Scarlett Johansson"},
    {item: "Natalie Portman"},
    {item: "Marlon Brando"},
    {item: "Audrey Hepburn"},
    {item: "Christian Bale"},
    {item: "Tom Cruise"},
    {item: "Emma Stone"},
    {item: "Jennifer Aniston"},
    {item: "Kate Winslet"},
    {item: "Tom Hanks"},
    {item: "Robert Downey Jr."},
    {item: "Denzel Washington"},
    {item: "Brad Pitt"},
    {item: "Will Smith"},
    {item: "Johnny Depp"},
    {item: "Shahrukh Khan"},
    {item: "Amitabh Bachchan"},
    {item: "Marion Cotillard"},
    {item: "Omar Sy"},
    {item: "Audrey Tautou"},
];
allActors.sort();

const drawerWidth = 240;

//TODO: move as much of useStyles code to theme.js as possible
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        top: 98
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: 1300,
        top: 98
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
        marginTop: 98,
        top: 98
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
    let searchOptions = [];
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(true);
    const [list, setList] = useState(featuredMovieList);

    const [filmName, setFilmName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [actorName, setActorName] = useState("");
    const [year, setYear] = useState(["", ""]);
    const [rating, setRating] = useState(["", ""]);


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
        console.log(countryName);
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
                <List>
                    <ListItem>
                        <AutocompletePlusCheckbox
                            name="countries"
                            label="Countries Filmed In"
                            items={allCountries}
                            advancedSearchCallback = {handleCountryCallback}
                        />
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <AutocompletePlusCheckbox
                            name="languages"
                            label="Languages"
                            items={allLanguages}
                            advancedSearchCallback = {handleLanguageCallback}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <AutocompletePlusCheckbox
                            name="genres"
                            label="Genres"
                            items={allGenre}
                            advancedSearchCallback = {handleGenreCallback}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <AutocompletePlusCheckbox
                            name="stars"
                            label="Stars"
                            items={allActors}
                            advancedSearchCallback = {handleActorCallback}
                        />
                    </ListItem>

                    <Divider />

                    <ListItem>
                        <RangeSlider
                            textLabel={"Year of Release"}
                            minVal={yearRangeAvailable[0]}
                            maxVal={yearRangeAvailable[1]}
                            getSelected={handleYearCallback} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <RangeSlider
                            textLabel={"IMDb Rating"}
                            minVal={imdbScoreAvailable[0]}
                            maxVal={imdbScoreAvailable[1]}
                            getSelected={handleRatingCallback}
                            increments={0.1} />
                    </ListItem>


                    <Divider />
                    <ListItem>
                        <AdvanceSearchButton
                            country={countryName}
                            language = {language}
                            genre = {genre}
                            actors = {actorName}
                            yearOfRelease = {year}
                            imdbRating = {rating}
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