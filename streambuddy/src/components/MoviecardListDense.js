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
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}


