import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typical from 'react-typical';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: "0%",
            marginRight: "0%",
            marginTop: "0%",
            marginBottom: "0%",
            width: "100%",
            height: theme.spacing(61),
        }
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: "0%",
            marginRight: "0%",
            marginTop: "0%",
            marginBottom: "0%",
            width: "100%",
            height: "auto",
        }
    },
    paperColor: {
        backgroundColor: '#eaeaeb',
    },
    tagline: {
            fontFamily: 'Raleway',
            fontSize: 50,
            fontWeight: 40,
            textAlign: "center",
            fontStyle: 'italic'
    },
    typical: {
        fontFamily: 'Raleway',
        fontSize: 100,
        fontWeight: 50,
        textAlign: "center",
        fontStyle: 'italic'
    },
    intro : {
        textAlign: "center",

    },
    paper: {
        width: 360,
        height: 230,
        padding: "6%",
        backgroundColor: '#eaeaeb'
    },
    gridRoot : {
        flexFlow: "row"
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
    },
    img: {
        margin: 'auto',
        display: 'block',
        width: 150,
        height: 150
    },
}));


function About() {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.root}>
                <Paper className={classes.paperColor}>
                    <Box m={3} pt={5}>
                        <Typography className={classes.typical}>
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Search', 1000,
                                    'Browse', 1000,
                                    'Discover', 1000,
                                    'Track', 1000,
                                    'Share', 1000
                                ]}
                        />
                        </Typography>
                        <Typography className={classes.tagline}>
                            films and TV shows on Netflix
                        </Typography>
                    </Box>
                </Paper>
            </div>
            <div className={classes.root1}>
                <Paper style={{background: 'linear-gradient(to bottom, #00ffff 0%, #46c7ee 100%)'}}>
                    <Box m={3} pt={5}>
                        <Typography variant='h4' align='center'>
                            WITH STREAMBUDDY
                        </Typography>
                    </Box>
                    <Box m={3} pt={5}>
                        <Grid container className={classes.gridRoot} spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" alignItems='center' spacing={5} direction="row">
                                    <Grid item>
                                        <Paper className={classes.paper}>
                                            <Typography variant='h6' align='center'> SEARCH, BROWSE, DISCOVER </Typography>
                                            <Typography variant='body1' className={classes.wrapIcon} align='center'>
                                                Say goodbye to the endless scrolling.
                                                Unsure about what to watch? <br />
                                                Use advanced search feature to see recommendations for films available on Netflix that fit your criteria.
                                                Search films by title, country, genre, rating, release date, and cast.

                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item >
                                        <Paper className={classes.paper}>
                                            <Typography variant='h6' align='center'> TRACK FILMS & TV SHOWS </Typography>
                                            <Typography variant='body1' className={classes.wrapIcon}>
                                                Track all films and tv shows you watch.
                                                Add films you want to see next to your watchlist.
                                                Rate films and write reviews.
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item >
                                        <Paper className={classes.paper}>
                                            <Typography variant='h6' align='center'> FOLLOW FRIENDS </Typography>
                                            <Typography variant='body1' className={classes.wrapIcon}>
                                                Stay posted about what your friends are watching and liked.
                                                Read reviews and check ratings by friends.
                                                Connect with cinephiles with similar interests.
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </div>
            <div className={classes.root1}>
                <Paper className={classes.paperColor}>
                    <Box m={3} pt={5}>
                        <Typography variant='h4' align='center'>
                            TEAM
                        </Typography>
                        <Typography variant='body1' align='center'>
                            We are a team of five computer science students at the University of British Columbia.
                        </Typography>
                    </Box>
                    <Avatar className={classes.img}
                            src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/61470978_10157244540142943_4037230418850742272_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=VJdTfU_HswcAX9HNiU7&_nc_ht=scontent.fyvr4-1.fna&oh=24ae9f01bfa72ceec176f34190cd0a27&oe=613A449D'
                    />
                    <br />
                    <Avatar className={classes.img}
                            src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/75580408_781818785612013_7149653515860705280_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=wfxTllnjBJwAX_cg_7p&_nc_ht=scontent.fyvr4-1.fna&oh=5d88e5012965bb7d4f2ffd9e5350030f&oe=6138517A'
                    />
                    <br />
                    <Avatar className={classes.img}
                                src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/119092844_10164222060005165_8220633099563277558_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=zGLXEVhqAp8AX_FibTa&tn=Tu1Za8C3ddDE5b6E&_nc_ht=scontent.fyvr4-1.fna&oh=8e9a5860d93f06039e5f1b034d540523&oe=613A159C'
                        />
                    <br />
                    <Avatar className={classes.img}
                                src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/75580408_781818785612013_7149653515860705280_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=wfxTllnjBJwAX_cg_7p&_nc_ht=scontent.fyvr4-1.fna&oh=5d88e5012965bb7d4f2ffd9e5350030f&oe=6138517A'
                        />
                    <br />
                    <Avatar className={classes.img}
                            src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/190094901_4276706709048484_2813659746883426814_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=HcFUMkVqE84AX9o8ll2&tn=Tu1Za8C3ddDE5b6E&_nc_ht=scontent.fyvr4-1.fna&oh=6214e82a89b7b3344081dd8611e01795&oe=61386324'
                    />
                    <Avatar className={classes.img}
                            src='https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/174219366_10100919576193835_8718139269133135122_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=mzXzUZP8GZ0AX-igh1x&tn=Tu1Za8C3ddDE5b6E&_nc_ht=scontent.fyvr4-1.fna&oh=535b50ebac805b0f61e2db028c3807ca&oe=6137A2BE'
                    />
                    <br />
                    <br />
                    <br />

                </Paper>
            </div>
        </div>
    );
}

export default About;