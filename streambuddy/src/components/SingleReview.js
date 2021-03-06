import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import axios from "axios";
import { UserContext } from "./UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    cursor: 'default'
  },
}));

export default function SingleReview(props) {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);


  const deleteReview = (review) => {
    let reviewIndex = user.reviews.indexOf(review);
    console.log(user.reviews.indexOf(review));
    axios.delete(`/api/users/${user._id}`,
      { data: { reviewIndex } })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const doesNotHaveRemove = (
    <React.Fragment>
      <Grid item>
      </Grid>
    </React.Fragment>
  )

  const hasRemove = (
    <React.Fragment>
      <Grid item>
        <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={() => deleteReview(props.review)}>
          Remove
        </Typography>
      </Grid>
    </React.Fragment>
  )

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              className={classes.image}
              disableRipple>
              <img className={classes.img} alt="complex" src={props.review.moviePoster} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.review.movieTitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.review.review}
                </Typography>
              </Grid>

              {props.hasRemove ? hasRemove : doesNotHaveRemove}
            </Grid>
            <Grid item>
              <Rating
                name="simple-controlled"
                value={props.review.rating}
                readOnly="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
