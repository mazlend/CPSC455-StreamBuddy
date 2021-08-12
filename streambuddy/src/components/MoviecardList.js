import React from 'react';
import Grid from '@material-ui/core/Grid';
import Moviecard from "./Moviecard";


export default function MoviecardList(props) {
    const movielist = props.list;
    if ((movielist === undefined || null) || movielist.length < 1) {
        return (
            <div className="movie-cards">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            <p style={{ marginBottom: 40 }}> Your list is empty :(
                                Follow some films!!! </p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    } else
        return (
            <div className="movie-cards">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            {movielist.map((item) => (
                                <Grid item key={item._id}>
                                    <Moviecard item={item} key={item._id} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
}
