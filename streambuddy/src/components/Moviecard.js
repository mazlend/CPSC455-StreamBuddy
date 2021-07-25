import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Backdrop, ButtonGroup, Fade, Modal} from "@material-ui/core";
import MovieCardActions from "./MovieCardActions";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 345,
    },
    paper: {
        padding: 3,
        marginTop: "15%"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'scroll'
    },
    buttons: {
        fontSize: 10,
        backgroundColor: "white"
    }
});

export default function Moviecard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handlePopoverOpen = (event) => {
        setOpen(true);
    };

    const handlePopoverClose = () => {
        setOpen(false);

    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.Poster}
                    title={props.item.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.moviename}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Title: {props.item.Title}<br />
                        Release Year: {props.item.Year}<br />
                        IMDB Rating: {props.item.imdbRating} <br/>
                        Genre: {props.item.Genre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <MovieCardActions />
            </CardActions>
            <CardActions>
                <Button size="small" color="primary"
                type={"button"}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.google.com/search?q=netflix+'+ props.item.Title;
                }}>
                    Watch on Netflix
                </Button>
                <Button size="small" color="primary"
                        type={"button"}
                        onClick={handlePopoverOpen}>
                    SEE FULL DETAILS
                </Button>
                <Modal open={open}
                       className={classes.modal}
                onClose={handlePopoverClose}
                       closeAfterTransition
                       disableScrollLock
                       BackdropComponent={Backdrop}
                       BackdropProps={{
                       timeout:500}}
                disableRestoreFocus>
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <div id="popovertext" style={{maxWidth: 900, padding: 20, backgroundColor: "white", position: "flex", zIndex:10}}>
                                <p> <h4>Title:</h4>{props.item.Title}</p> <br />
                                <p> <h4>Rated:</h4> {props.item.Rated} </p> <br />
                                <p> <h4>Runtime:</h4> {props.item.Runtime} </p> <br />
                                <p> <h4>Language(s):</h4> {props.item.Language} </p> <br />
                                <p> <h4>Country Filmed In:</h4> {props.item.Country} </p> <br />
                                <p> <h4>Director:</h4> {props.item.Director} </p> <br />
                                <p> <h4>Actors:</h4> {props.item.Actors} </p> <br />
                                {/*<p> <h4>Ratings:</h4>*/}
                                {/*    {props.item.Ratings[0].Source} {props.item.Ratings[0].Value} <br />*/}
                                {/*    {props.item.Ratings[1].Source} {props.item.Ratings[1].Value} <br />*/}
                                {/*    {props.item.Ratings[2].Source} {props.item.Ratings[2].Value}</p> <br />*/}
                                <p> <h4>Plot Summary:</h4> {props.item.Plot} </p>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </CardActions>
        </Card>
    );
}
