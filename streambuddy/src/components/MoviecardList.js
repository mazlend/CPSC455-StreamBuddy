import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Moviecard from "./Moviecard";
import {initialmoviesdata} from "../initialmovies";
import {featuredMovieList} from "../featuredMovieList";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         height: 140,
//         width: 100,
//     },
//     control: {
//         padding: theme.spacing(8),
//     },
// }));

export default function MoviecardList() {
   // const classes = useStyles();
    const initialList = featuredMovieList;
    const [list, setList] = React.useState(initialList);

    return (
        <div className="movie-cards">
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    {list.map((item) => (
                        <Grid item>
                            <Moviecard item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
            </div>
    );
}
