import React from 'react';
import {Container} from "@material-ui/core";

function Watchlist() {

    return(
        <Container maxWidth="lg">
            <div>
               <h1>
                   Watchlist
               </h1>
               <p>
                   The Watchlist contains all movies the user would like to watch some time. It is like a TODO list.
               </p>
            </div>
        </Container>
    );
}

export default Watchlist;