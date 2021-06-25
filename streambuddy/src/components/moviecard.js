import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 345,
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: 3,
    },
});



export default function Moviecard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    // For the Popover we used parts of the demo code of the material-ui documentation: https://codesandbox.io/s/f9n6j?file=/demo.js:922-1436
    return (
        <Card className={classes.root}>
            <CardActionArea
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}>
                <CardMedia
                    className={classes.media}
                    image={props.item.movieimage}
                    title={props.item.moviename}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.moviename}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Release Year: {props.item.moviereleaseyear}<br />
                        IMDB Rating: {props.item.movierating} <br/>
                        Genre: {props.item.moviegenre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Watch on Netflix
                </Button>
                <Typography
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}>
                    SEE FULL DESCRIPTION
                </Typography>
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography>
                        <p> {props.item.moviename}</p>
                        <p> Description of the movie: Some description of the movie, maybe a trailer </p>
                        <p> Some additional info </p>
                        <p> {props.item.moviereleaseyear}</p>
                    </Typography>
                </Popover>
            </CardActions>
        </Card>
    );
}
