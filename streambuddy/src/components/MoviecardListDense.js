import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Grid from "@material-ui/core/Grid";
import {useContext} from "react";
import {UserContext} from "./UserContext";


const columns = [
    { field: 'Title', headerName: 'Title', width: 200 },
    {
        field: 'Year',
        headerName: 'Year',
        width: 120,
        editable: true,
    },
    {
        field: 'Rated',
        headerName: 'Rated',
        width: 120,
        editable: true,
    },
    {
        field: 'Released',
        headerName: 'Released',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'Runtime',
        headerName: 'Runtime',
        type: 'number',
        width: 120,
        editable: true,
    },
    {
        field: 'Genre',
        headerName: 'Genre',
        width: 120,
        editable: true,
    },
    {
        field: 'Director',
        headerName: 'Director',
        width: 120,
        editable: true,
    },
    {
        field: 'Actors',
        headerName: 'Actors',
        width: 120,
        editable: true,
    },
    {
        field: 'Plot',
        headerName: 'Plot',
        width: 120,
        editable: true,
    },
    {
        field: 'imdbRating',
        headerName: 'IMDB Rating',
        width: 120,
        editable: true,
    },

];


export default function MoviecardListDense(props) {
    const rows = props.movieList;
    if((rows === undefined || null) || rows.length < 1 ){
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
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}


