import React, {useContext} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button, TextField} from "@material-ui/core";
import {UserContext} from "./UserContext";
import axios from "axios";


export default function RatingsAndReviewInput(props) {
    const [rating, setRating] = React.useState(0);
    const [reviewText, setReviewText] = React.useState(null);
    const {user, setUser} = useContext(UserContext);


    const updateUserReviews = (user, review) => {
        axios.put(`http://localhost:5000/api/users/${user._id}/reviews/`, {
            review
        }).then((res) => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    };

    const handleChangeTextReview = (event) => {
        setReviewText(event.target.value);
    };

    //TODO: change review to reviewText
    const postReview = () => {
        let review = {
            filmId: props.filmId,
            movieTitle: props.movieTitle,
            moviePoster: props.moviePoster,
            rating: rating,
            review: reviewText
        }
        updateUserReviews(user, review);
        console.log(props.filmId);
    };

    const closePopover = () => {
        props.onPostClick();
    }

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rate This Movie!</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={handleChangeRating}
                />
            </Box>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{marginBottom: 10}}>Write a Review!</Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Your review of this movie"
                    multiline
                    rows={8}
                    variant="outlined"
                    value={reviewText}
                    onChange={handleChangeTextReview}
                    style={{width: 400}}
                />
            </Box>
                <box><Button variant="contained"
                        color="primary" onClick={(event) => {
                        postReview();
                        closePopover(event);
                        }}>Post Review </Button>
                </box>
        </div>
    );
}
