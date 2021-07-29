import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Moviecard from "./Moviecard";
import { featuredMovieList } from "../featuredMovieList";
import CustomizedAlerts from "./Alerts";

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

export default function MoviecardList(props) {
    // const classes = useStyles();
    // const [list, setList] = React.useState(props.list);
    const initialList = props.list;
    if((initialList === undefined || null) || initialList.length < 1 ){
        return(
            <div className="movie-cards">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            <p style={{marginBottom: 40}}>Your list is empty :( <br /> Add some Movies!!! </p>
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
                            {initialList.map((item) => (
                                <Grid item>
                                    <Moviecard item={item}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
    );
}
