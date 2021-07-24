import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Moviecard from "./Moviecard";

export default function MoviecardList(props) {

    const list = props.list;

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
