import React from 'react';
import Moviecard from "./Moviecard";
import { Grid } from '@material-ui/core';

export default function MoviecardListDense(props) {
    const [list, setList] = React.useState(props.movieList);

    return (
        <div className="movie-cards-dense">
            <p>
                Here will be a condensed view of the movies like in spotify
                Use table from MAterial ui!
            </p>
            {list.map((item) => (
                <Grid item>
                    <Moviecard item={item} />
                 </Grid>
                ))}
        </div>
    );
}