// import React from 'react';
// import Moviecard from "./Moviecard";
// import { Grid } from '@material-ui/core';
//
// export default function MoviecardListDense(props) {
//     const [list, setList] = React.useState(props.movieList);
//
//     return (
//         <div className="movie-cards-dense">
//             <p>
//                 Here will be a condensed view of the movies like in spotify
//                 Use table from MAterial ui!
//             </p>
//             {list.map((item) => (
//                 <Grid item>
//                     <Moviecard item={item} />
//                  </Grid>
//                 ))}
//         </div>
//     );
// }


import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Moviecard from "./Moviecard";

// {"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)","Actors":"Marlon Brando, Al Pacino, James Caan, Richard S. Castellano","Plot":"When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.","Language":"English, Italian, Latin","Country":"USA","Awards":"Won 3 Oscars. Another 29 wins & 30 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.2/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"9.2","imdbVotes":"1,666,752","imdbID":"tt0068646","Type":"movie","DVD":"01 Aug 2013","BoxOffice":"$134,966,411","Production":"Paramount Pictures","Website":"N/A","Response":"True"},


const columns = [
    { field: 'Title', headerName: 'Title', width: 120 },
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
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                getRowId={(row) => row.imdbID}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}


