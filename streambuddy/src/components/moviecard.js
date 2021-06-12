import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 300,
    },
});

export default function Moviecard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.movieimage}
                    title={props.item.moviename}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
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
                <Button size="small" color="primary">
                    Full Description
                </Button>
            </CardActions>
        </Card>
    );
}
